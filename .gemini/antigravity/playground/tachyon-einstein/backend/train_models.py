import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
import joblib
import os

print("Starting Startup Growth Intelligence Engine Model Training...")

# Create models directory if it doesn't exist
models_dir = os.path.join(os.path.dirname(__file__), 'models')
os.makedirs(models_dir, exist_ok=True)

# ==========================================
# 1. Train Customer Churn Predictor
# ==========================================
print("\n[1/2] Generating SaaS dataset and training Churn Predictor...")

# Generating synthetic SaaS data
np.random.seed(42)
n_samples = 5000

# Features
days_since_login = np.random.randint(1, 60, n_samples)
support_tickets = np.random.randint(0, 10, n_samples)
monthly_spend = np.random.uniform(10.0, 500.0, n_samples)
feature_adoption = np.random.uniform(0.0, 1.0, n_samples)

# Synthetic rule for churn: 
# High days since login + high support tickets + low feature adoption = HIGH CHURN
churn_prob = (days_since_login / 60.0) * 0.4 + (support_tickets / 10.0) * 0.3 + (1.0 - feature_adoption) * 0.3
churn_labels = (churn_prob > 0.55).astype(int)

# Add some noise
noise = np.random.randint(0, 2, n_samples) * np.random.choice([0, 1], n_samples, p=[0.9, 0.1])
churn_labels = np.logical_xor(churn_labels, noise).astype(int)

df_churn = pd.DataFrame({
    'days_since_login': days_since_login,
    'support_tickets': support_tickets,
    'monthly_spend': monthly_spend,
    'feature_adoption': feature_adoption,
    'churn': churn_labels
})

X_churn = df_churn.drop('churn', axis=1)
y_churn = df_churn['churn']

X_train_c, X_test_c, y_train_c, y_test_c = train_test_split(X_churn, y_churn, test_size=0.2, random_state=42)

# Create a robust pipeline (Scaler + Random Forest)
churn_pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('rf', RandomForestClassifier(n_estimators=100, max_depth=5, random_state=42))
])

churn_pipeline.fit(X_train_c, y_train_c)
churn_acc = churn_pipeline.score(X_test_c, y_test_c)
print(f"Churn Model Accuracy: {churn_acc:.2%}")

churn_model_path = os.path.join(models_dir, 'churn_model.pkl')
joblib.dump(churn_pipeline, churn_model_path)
print(f"Saved Churn Predictor to: {churn_model_path}")

# ==========================================
# 2. Train Feedback Sentiment Analyzer
# ==========================================
print("\n[2/2] Generating feedback dataset and training Sentiment Analyzer...")

# Synthetic text data
reviews = [
    # Positive (0)
    "The new dashboard is incredible. It saves us hours.",
    "Absolutely love the latest update. Great job team!",
    "Customer support was very helpful. I'm a big fan.",
    "This tool is essential to our daily operations. 5 stars.",
    "Fast, reliable, and reasonably priced. Couldn't ask for more.",
    
    # Negative (1)
    "The app keeps crashing when I try to export data. Very frustrating.",
    "Support hasn't responded to me in 3 days. Terrible experience.",
    "Too expensive for what it does. We are switching to a competitor.",
    "The UI is clunky and slow. Needs a major overhaul.",
    "I hate the new feature. It ruined my workflow.",
    
    # Feature Req (2)
    "It works okay, but I wish there was a dark mode.",
    "Can you add an integration with Slack? That would be huge.",
    "Please consider adding bulk export functionality.",
    "We need API access to really use this at scale.",
    "Missing a lot of basic reporting features. Hope they add them soon."
] * 100 # Duplicate to create volume

labels = [0]*5 + [1]*5 + [2]*5
labels = labels * 100

df_sentiment = pd.DataFrame({'text': reviews, 'label': labels})

# Shuffle
df_sentiment = df_sentiment.sample(frac=1, random_state=42).reset_index(drop=True)

X_sent = df_sentiment['text']
y_sent = df_sentiment['label']

X_train_s, X_test_s, y_train_s, y_test_s = train_test_split(X_sent, y_sent, test_size=0.2, random_state=42)

# TF-IDF + Logistic Regression
sentiment_pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(max_features=1000, stop_words='english')),
    ('clf', LogisticRegression(random_state=42, max_iter=1000))
])

sentiment_pipeline.fit(X_train_s, y_train_s)
sent_acc = sentiment_pipeline.score(X_test_s, y_test_s)
print(f"Sentiment Model Accuracy: {sent_acc:.2%}")

sentiment_model_path = os.path.join(models_dir, 'sentiment_model.pkl')
joblib.dump(sentiment_pipeline, sentiment_model_path)
print(f"Saved Sentiment Analyzer to: {sentiment_model_path}")

print("\nAll models trained and ready for deployment!")
