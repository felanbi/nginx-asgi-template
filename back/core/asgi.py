import os

from django.core.asgi import get_asgi_application
from fastapi import FastAPI
from blacknoise import BlackNoise
from tortoise.contrib.fastapi import register_tortoise

from api.core import routers

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")

from django.conf import settings

app = FastAPI(
    docs_url='/api/docs'
)

register_tortoise(
    app,
    db_url=settings.DATABASE_URL,
    modules={"models": ["api.core.models"]},
    add_exception_handlers=True,
)

app.include_router(routers.authors.router)
app.include_router(routers.books.router)

djapp = BlackNoise(get_asgi_application())
djapp.add(settings.STATIC_ROOT, "/static")

app.mount("/", djapp)
