FROM python:3.13-slim
WORKDIR /app
COPY . .
RUN chmod +x entrypoint.sh && pip install poetry && poetry install
ENTRYPOINT [ "/app/entrypoint.sh" ]
CMD ["poetry", "run", "uvicorn", "--host", "0.0.0.0", "core.asgi:app"]