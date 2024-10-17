FROM python:3.12.7-slim as deps
WORKDIR /tmp
COPY pyproject.toml poetry.lock ./
RUN pip install poetry && poetry export -f requirements.txt --output requirements.txt --without-urls --without-hashes

FROM python:3.12.7-slim
WORKDIR /app

COPY --from=deps /tmp/requirements.txt ./
RUN apt update && apt install -y lsof && pip install -r requirements.txt

COPY . .
RUN chmod +x entrypoint.sh

ENTRYPOINT [ "./entrypoint.sh" ]
CMD ["uvicorn", "--host", "0.0.0.0", "core.asgi:app"]