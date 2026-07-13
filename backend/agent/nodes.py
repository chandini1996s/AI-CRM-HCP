from langchain_core.messages import SystemMessage

from agent.state import AgentState
from agent.prompts import SYSTEM_PROMPT
from services.llm_service import llm

from agent.tools import (
    log_interaction,
    edit_interaction,
    search_hcp,
    summarize_interactions,
    recommend_next_action,
)

llm_with_tools = llm.bind_tools([
    log_interaction,
    edit_interaction,
    search_hcp,
    summarize_interactions,
    recommend_next_action,
])


def chatbot(state: AgentState):

    messages = [
        SystemMessage(content=SYSTEM_PROMPT)
    ] + state["messages"]

    response = llm_with_tools.invoke(messages)

    return {
        "messages": [response]
    }