import datetime

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from django.contrib.auth import aauthenticate
from django.conf import settings
import jwt

router = APIRouter(prefix="/api/token")

class Request(BaseModel):
    username: str
    password: str

class TokenPair(BaseModel):
    access: str
    refresh: str

@router.post("/")
async def post(token_request: Request):
    user = await aauthenticate(
        username=token_request.username,
        password=token_request.password
    )
    
    if user is None:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    exp = datetime.datetime.now() + settings.JWT_EXP_TIMEDELTA
    payload = {"user_id": user.id, "exp": exp}
    access = jwt.encode(payload, settings.SECRET_KEY, algorithm=settings.JWT_ALGORITHM)

    exp = datetime.datetime.now() + settings.JWT_REFRESH_EXP_TIMEDELTA
    payload = {"user_id": user.id, "exp": exp}
    refresh = jwt.encode(payload, settings.SECRET_KEY, algorithm=settings.JWT_ALGORITHM)
    
    return TokenPair(access=access, refresh=refresh)