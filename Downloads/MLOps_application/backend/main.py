import os
import joblib
import pandas as pd
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Startup Growth Intelligence Engine API")

# Enable CORS for frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load Models
MODELS_DIR = os.path.join(os.path.dirname(__file__), 'models')
CHURN_MODEL_PATH = os.path.join(MODELS_DIR, 'churn_model.pkl')
SENTIMENT_MODEL_PATH = os.path.join(MODELS_DIR, 'sentiment_model.pkl')

churn_model = None
sentiment_model = None

@app.on_event("startup")
def load_models():
    global churn_model, sentiment_model
    try:
        churn_model = joblib.load(CHURN_MODEL_PATH)
        sentiment_model = joblib.load(SENTIMENT_MODEL_PATH)
        print("Models loaded successfully.")
    except Exception as e:
        print(f"Error loading models: {e}")

# ==========================================
# Data Models (Pydantic)
# ==========================================
class ChurnRequest(BaseModel):
    days_since_login: int
    support_tickets: int
    monthly_spend: float
    feature_adoption: float

class SentimentRequest(BaseModel):
    text: str

# ==========================================
# Endpoints
# ==========================================
@app.post("/api/predict/churn")
def predict_churn(req: ChurnRequest):
    if not churn_model:
        raise HTTPException(status_code=500, detail="Churn model not loaded.")
    
    # Prepare data for model
    df = pd.DataFrame([{
        'days_since_login': req.days_since_login,
        'support_tickets': req.support_tickets,
        'monthly_spend': req.monthly_spend,
        'feature_adoption': req.feature_adoption
    }])
    
    # Predict probabilities (return prob of class 1 which is churn)
    prob = churn_model.predict_proba(df)[0][1]
    
    # Simple risk categorization logic for the UI
    if prob > 0.75:
        risk_level = "Critical"
    elif prob > 0.40:
        risk_level = "High"
    elif prob > 0.20:
        risk_level = "Moderate"
    else:
        risk_level = "Low"
        
    return {
        "churn_probability": float(prob),
        "risk_level": risk_level
    }

@app.post("/api/predict/sentiment")
def predict_sentiment(req: SentimentRequest):
    if not sentiment_model:
        raise HTTPException(status_code=500, detail="Sentiment model not loaded.")
    
    # 0 = Positive, 1 = Negative, 2 = Feature Request
    prediction = sentiment_model.predict([req.text])[0]
    probabilities = sentiment_model.predict_proba([req.text])[0]
    
    labels = {0: "Positive", 1: "Negative", 2: "Feature Request"}
    
    return {
        "classification": labels.get(prediction, "Unknown"),
        "confidence": float(max(probabilities)),
        "all_probabilities": {
            "Positive": float(probabilities[0]),
            "Negative": float(probabilities[1]),
            "Feature Request": float(probabilities[2])
        }
    }

@app.get("/api/health")
def health_check():
    return {"status": "Growth Intelligence Engine is online."}
