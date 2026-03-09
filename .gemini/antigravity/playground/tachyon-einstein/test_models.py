import urllib.request
import json
import time
import subprocess
import os
import signal
import sys

# Start the uvicorn server as a subprocess
print("Starting Startup Growth Intelligence Engine backend server...")
server_process = subprocess.Popen(
    [sys.executable, "-m", "uvicorn", "backend.main:app", "--host", "127.0.0.1", "--port", "8000"],
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE
)

print("Waiting for server to load ML models...")
time.sleep(4) # Give it time to bind and load the .pkl files

churn_url = "http://127.0.0.1:8000/api/predict/churn"
sentiment_url = "http://127.0.0.1:8000/api/predict/sentiment"

print("\n==================================")
print("TEST 1: Churn Predictor (Random Forest)")
print("==================================")
churn_data = json.dumps({
    "days_since_login": 45,
    "support_tickets": 6,
    "monthly_spend": 120.50,
    "feature_adoption": 20.0
}).encode("utf-8")
churn_req = urllib.request.Request(churn_url, data=churn_data, headers={'Content-Type': 'application/json'})

try:
    with urllib.request.urlopen(churn_req) as response:
        result = json.loads(response.read().decode())
        print(f"Result: {result}")
        print("✅ Churn predict endpoint is working!")
except Exception as e:
    print(f"❌ TEST FAILED: {e}")

print("\n==================================")
print("TEST 2: Feedback Analyzer (NLP)")
print("==================================")
sentiment_data = json.dumps({
    "text": "This product is an absolute game changer. We love the new updates!"
}).encode("utf-8")
sentiment_req = urllib.request.Request(sentiment_url, data=sentiment_data, headers={'Content-Type': 'application/json'})

try:
    with urllib.request.urlopen(sentiment_req) as response:
        result = json.loads(response.read().decode())
        print(f"Result: {result}")
        print("✅ Sentiment predict endpoint is working!")
except Exception as e:
    print(f"❌ TEST FAILED: {e}")

print("\nShutting down server...")
server_process.terminate()
server_process.wait()
print("Done.")
