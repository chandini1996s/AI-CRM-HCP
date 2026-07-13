from langgraph.graph import StateGraph, START
from langgraph.prebuilt import ToolNode, tools_condition

from agent.state import AgentState
from agent.nodes import chatbot
from agent.tools import (
    log_interaction,
    edit_interaction,
    search_hcp,
    summarize_interactions,
    recommend_next_action,
)

builder = StateGraph(AgentState)

builder.add_node("chatbot", chatbot)

builder.add_node(
    "tools",
    ToolNode([
        log_interaction,
        edit_interaction,
        search_hcp,
        summarize_interactions,
        recommend_next_action,
    ])
)

builder.add_edge(START, "chatbot")

builder.add_conditional_edges(
    "chatbot",
    tools_condition,
)

builder.add_edge("tools", "chatbot")

graph = builder.compile()