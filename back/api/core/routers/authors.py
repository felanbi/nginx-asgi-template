from fastapi import APIRouter, Depends

from api.core.models import Author
from api.core.session import get_user

router = APIRouter(prefix="/api/authors")

@router.get("/")

async def getall(user=Depends(get_user)):
    return await Author.all()
