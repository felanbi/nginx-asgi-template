from fastapi import APIRouter

from ..models import Book

router = APIRouter(prefix="/api/books")


@router.get("/")
async def getall():
    return await Book.all()
