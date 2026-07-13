from langchain_core.tools import tool

from services.interaction_service import (
    save_interaction,
    update_interaction,
    search_interactions,
    get_interactions_for_summary,
    get_recommendation_data,
)


@tool
def log_interaction(
    doctor_name: str,
    interaction_type: str,
    notes: str,
    follow_up: str,
):
    """
    Save an HCP interaction into the CRM database.

    Args:
        doctor_name: Name of the healthcare professional.
        interaction_type: Meeting, Call, Visit, etc.
        notes: Summary of the interaction.
        follow_up: Planned follow-up date or action.
    """

    save_interaction(
        doctor_name=doctor_name,
        interaction_type=interaction_type,
        notes=notes,
        follow_up=follow_up,
    )

    return f"Interaction with {doctor_name} has been logged successfully."



@tool
def edit_interaction(
    doctor_name: str,
    follow_up: str,
):
    """
    Update the follow-up date or action for an existing HCP interaction.
    """

    return update_interaction(
        doctor_name=doctor_name,
        follow_up=follow_up,
    )
@tool
def search_hcp(doctor_name: str):
    """
    Search all interactions for a healthcare professional.
    """

    return search_interactions(doctor_name)

@tool
def summarize_interactions(doctor_name: str):
    """
    Retrieve all interactions for a doctor so the AI can summarize them.
    """

    return get_interactions_for_summary(doctor_name)

@tool
def recommend_next_action(doctor_name: str):
    """
    Recommend the next action for a healthcare professional.
    """

    return get_recommendation_data(doctor_name)