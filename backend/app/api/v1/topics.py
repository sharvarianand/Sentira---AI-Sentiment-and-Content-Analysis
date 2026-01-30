from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
import uuid

router = APIRouter()

class TopicRequest(BaseModel):
    hashtag: str
    platforms: List[str]

class TopicResult(BaseModel):
    id: str
    hashtag: str
    total_videos: int
    polarization_score: float
    sentiment_avg: float

@router.post("/scan", response_model=TopicResult)
async def scan_topic(request: TopicRequest):
    return {
        "id": str(uuid.uuid4()),
        "hashtag": request.hashtag,
        "total_videos": 48,
        "polarization_score": 0.82,
        "sentiment_avg": -0.15
    }
