FROM python:3.13-slim
WORKDIR /app
COPY . .
RUN pip install poetry && poetry install && chmod +x entrypoint.sh
RUN apt update && apt install -y lsof
ENTRYPOINT [ "/app/entrypoint.sh" ]
CMD ["poetry", "run", "uvicorn", "--host", "0.0.0.0", "core.asgi:app"]