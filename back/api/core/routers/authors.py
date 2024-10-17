from fastapi import APIRouter

from ..models import Author

router = APIRouter(prefix="/api/authors")


@router.get("/")
async def getall():
    return await Author.all()
