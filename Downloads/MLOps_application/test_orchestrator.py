import urllib.request
import json
import time
import subprocess
import os
import signal
import sys

# Start the uvicorn server as a subprocess
print("Starting backend server...")
server_process = subprocess.Popen(
    [sys.executable, "-m", "uvicorn", "backend.main:app", "--host", "127.0.0.1", "--port", "8000"],
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE
)

print("Waiting for server to start...")
time.sleep(3) # Give it time to bind

url = "http://127.0.0.1:8000/api/consult"

data = json.dumps({"prompt": "How can we improve our retail data analytics and move workloads to the cloud?"}).encode("utf-8")
req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})

try:
    print(f"Testing endpoint {url}...")
    with urllib.request.urlopen(req) as response:
        result = json.loads(response.read().decode())
        print("\n--- TEST SUCCESS ---")
        print("Executive Summary:")
        print(result.get("executive_summary"))
        print(f"\nAgents used: {[a['agent_name'] for a in result.get('agent_responses', [])]}")
        print("Server is working correctly!")
except Exception as e:
    print("\n--- TEST FAILED ---")
    print(f"Error: {e}")
finally:
    print("\nShutting down server...")
    server_process.terminate()
    server_process.wait()
    print("Done.")
