from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1 import videos, analysis, topics, reports

app = FastAPI(
    title="Sentira AI API",
    description="AI-Powered Video Sentiment & Bias Intelligence Platform",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to Sentira AI API", "status": "active"}

# Include routers
app.include_router(videos.router, prefix="/api/v1/videos", tags=["Videos"])
app.include_router(analysis.router, prefix="/api/v1/analysis", tags=["Analysis"])
app.include_router(topics.router, prefix="/api/v1/topics", tags=["Topics"])
app.include_router(reports.router, prefix="/api/v1/reports", tags=["Reports"])
