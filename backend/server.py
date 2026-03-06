from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import httpx
import logging

app = FastAPI()

# CORS - allow frontend origins
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# WhatsApp config
WHATSAPP_API_URL = "https://sociovia-backend-362038465411.europe-west1.run.app/api/whatsapp/hooks/21"
WHATSAPP_SECRET = "mp9o0LSXH5XII7xlJS4JOyi-4APwwfQGCx_sTOzLiME"
WHATSAPP_PHONE = "919999320932"


class EnquiryCreate(BaseModel):
    company_name: str
    contact_person: Optional[str] = ""
    email: str
    country: Optional[str] = ""
    phone: str
    category: Optional[str] = ""
    message: Optional[str] = ""


@app.get("/api/health")
async def health():
    return {"status": "ok"}


@app.post("/api/enquiries")
async def create_enquiry(enquiry: EnquiryCreate):
    """Receive enquiry from frontend and send WhatsApp notification."""
    logger.info(f"Enquiry received: {enquiry.company_name} - {enquiry.email}")

    payload = {
        "to": WHATSAPP_PHONE,
        "variables": [
            enquiry.company_name or "N/A",
            enquiry.contact_person or "N/A",
            enquiry.email or "N/A",
            enquiry.country or "N/A",
            enquiry.phone or "N/A",
            enquiry.category or "N/A",
            enquiry.message or "N/A",
        ]
    }

    try:
        async with httpx.AsyncClient(timeout=15.0) as client:
            response = await client.post(
                f"{WHATSAPP_API_URL}?secret={WHATSAPP_SECRET}",
                json=payload
            )
            logger.info(f"WhatsApp API response: {response.status_code} - {response.text}")

            if response.status_code in (200, 201):
                return {"success": True, "message": "Enquiry sent successfully"}
            else:
                return {"success": False, "error": response.text, "status": response.status_code}
    except Exception as e:
        logger.error(f"WhatsApp notification failed: {str(e)}")
        return {"success": False, "error": str(e)}