#!/bin/sh

if [[ $ENV = "production" ]]; then
    python3 manage.py makemigrations && python3 manage.py migrate 
    python3 manage.py collectstatic -l --noinput
    exec uvicorn core.asgi:app --host 0.0.0.0
else
    poetry run python3 manage.py makemigrations && poetry run python3 manage.py migrate
    poetry run python3 manage.py collectstatic -l --noinput 
    exec poetry run uvicorn core.asgi:app --host 0.0.0.0 --reload
fi