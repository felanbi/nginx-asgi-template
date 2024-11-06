import json
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")

from fastapi import Request, HTTPException
from fastapi.responses import JSONResponse
from starlette.status import HTTP_401_UNAUTHORIZED
from django.contrib.auth import alogin, logout
from asgiref.sync import sync_to_async
import redis.asyncio as aioredis
from django.conf import settings

from . import messages as m

redis = aioredis.from_url(settings.REDIS_URL)

async def is_session_active(session_id: str):
    session = await redis.get(session_id)
    
    return session is not None

async def get_user(request: Request):
    session_id = request.cookies.get(settings.SESSION_COOKIE_NAME)

    if not session_id:
        raise HTTPException(status_code=HTTP_401_UNAUTHORIZED, detail=m.Session.NOT_AUTHENTICATED)

    if not await is_session_active(session_id):
        raise HTTPException(status_code=HTTP_401_UNAUTHORIZED, detail=m.Session.INVALID)
