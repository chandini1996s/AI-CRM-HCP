from fastapi import FastAPI
from langchain_core.messages import HumanMessage
from fastapi.middleware.cors import CORSMiddleware
from services.interaction_service import get_all_interactions
from services.interaction_service import search_interactions
from services.interaction_service import dashboard_stats

import models

from database import Base, engine
from agent.graph import graph

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI CRM HCP",
    version="1.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "AI CRM Backend Running Successfully!"
    }

@app.post("/chat")
def chat(message: str):

    result = graph.invoke(
        {
            "messages": [
                HumanMessage(content=message)
            ]
        }
    )

    return {
        "response": result["messages"][-1].content
    }

@app.get("/history")
def history():
    return get_all_interactions()

@app.get("/search")
def search(doctor_name: str):
    return search_interactions(doctor_name)

@app.get("/dashboard")
def dashboard():
    return dashboard_stats()