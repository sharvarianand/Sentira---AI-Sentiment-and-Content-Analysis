from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class ReportRequest(BaseModel):
    analysis_id: str
    format: str # pdf, docx, csv

@router.post("/generate")
async def generate_report(request: ReportRequest):
    return {"message": "Report generation started", "report_url": f"/exports/report_{request.analysis_id}.{request.format}"}
