
🛡️ SIEMShield: LLM-Powered Threat Detection and Advisory System
SIEMShield is a real-time cybersecurity advisory system that uses a Large Language Model (LLM) to analyze application logs, detect suspicious activity, and provide human-readable security recommendations—with no automation involved.

🔧 Features
Real-time log ingestion with Splunk and Kafka

LLM-based detection of cyber threats like:

Brute force attacks

SQL injection

XSS

Streamlit dashboard for real-time alerts and advisory messages

🧱 Architecture Overview
css
Copy
Edit
[App Logs] → [Splunk] → [Kafka Topics] → [LLM Analysis] → [Streamlit Dashboard]
Logs streamed via Kafka and analyzed by an LLM

Detected threats visualized with actionable advice (not auto-executed)

🛠️ Stack
Splunk, Kafka, Python, LLM, Streamlit

Dockerized for easy deployment

PostgreSQL for structured log storage

🚀 Run Locally
bash
Copy
Edit
docker-compose up --build
Add .env, configure Splunk alerts → Kafka topics → LLM consumer.

📖 Reference
This work is based on our published paper:
“SIEMShield: LLM-Powered Threat Detection and Advisory System”, Grenze Scientific Society, 2025.
