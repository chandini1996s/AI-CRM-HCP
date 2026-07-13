from sqlalchemy.orm import Session

from database import SessionLocal
from models import Interaction
from sqlalchemy import func


def save_interaction(
    doctor_name: str,
    interaction_type: str,
    notes: str,
    follow_up: str,
):

    db: Session = SessionLocal()

    interaction = Interaction(
        doctor_name=doctor_name,
        interaction_type=interaction_type,
        notes=notes,
        follow_up=follow_up,
        sentiment="Neutral",
    )

    db.add(interaction)

    db.commit()

    db.refresh(interaction)

    db.close()

    return interaction

def update_interaction(
    doctor_name: str,
    follow_up: str,
):
    db: Session = SessionLocal()

    interaction = (
        db.query(Interaction)
        .filter(Interaction.doctor_name == doctor_name)
        .order_by(Interaction.id.desc())
        .first()
    )

    if not interaction:
        db.close()
        return f"No interaction found for {doctor_name}."

    interaction.follow_up = follow_up

    db.commit()
    db.refresh(interaction)
    db.close()

    return f"Follow-up updated to {follow_up} for {doctor_name}."

def search_interactions(doctor_name: str):

    db: Session = SessionLocal()

    interactions = (
        db.query(Interaction)
        .filter(Interaction.doctor_name.ilike(f"%{doctor_name}%"))
        .all()
    )

    db.close()

    if not interactions:
        return f"No interactions found for {doctor_name}."

    result = []

    for interaction in interactions:
        result.append(
            {
                "doctor_name": interaction.doctor_name,
                "interaction_type": interaction.interaction_type,
                "notes": interaction.notes,
                "follow_up": interaction.follow_up,
                "sentiment": interaction.sentiment,
                "created_at": str(interaction.created_at)
            }
        )

    return result

def get_interactions_for_summary(doctor_name: str):

    interactions = search_interactions(doctor_name)

    if isinstance(interactions, str):
        return interactions

    summary = ""

    for interaction in interactions:
        summary += f"""
Doctor: {interaction['doctor_name']}
Interaction: {interaction['interaction_type']}
Notes: {interaction['notes']}
Follow Up: {interaction['follow_up']}
Sentiment: {interaction['sentiment']}

"""

    return summary

def get_recommendation_data(doctor_name: str):

    return get_interactions_for_summary(doctor_name)



def get_all_interactions():
    db = SessionLocal()

    interactions = (
        db.query(Interaction)
        .order_by(Interaction.created_at.desc())
        .all()
    )

    result = []

    for item in interactions:
        result.append({
            "doctor_name": item.doctor_name,
            "interaction_type": item.interaction_type,
            "notes": item.notes,
            "follow_up": item.follow_up,
            "sentiment": item.sentiment,
            "created_at": str(item.created_at),
        })

    db.close()

    return result

def dashboard_stats():
    db = SessionLocal()

    total_interactions = db.query(Interaction).count()

    total_doctors = (
        db.query(func.count(func.distinct(Interaction.doctor_name)))
        .scalar()
    )

    total_followups = (
        db.query(Interaction)
        .filter(Interaction.follow_up != None)
        .count()
    )

    total_meetings = (
        db.query(Interaction)
        .filter(Interaction.interaction_type == "Meeting")
        .count()
    )

    db.close()

    return {
        "doctors": total_doctors,
        "meetings": total_meetings,
        "followups": total_followups,
        "interactions": total_interactions,
    }