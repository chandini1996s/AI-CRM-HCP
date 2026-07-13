from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func

from database import Base


class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)
    doctor_name = Column(String(100), nullable=False)
    interaction_type = Column(String(100))
    notes = Column(Text)
    follow_up = Column(String(100))
    sentiment = Column(String(50))
    created_at = Column(DateTime(timezone=True), server_default=func.now())