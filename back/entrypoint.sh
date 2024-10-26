#!/bin/sh
python3 manage.py makemigrations && python3 manage.py migrate 
python3 manage.py collectstatic -l --noinput
exec uvicorn core.asgi:app --host 0.0.0.0