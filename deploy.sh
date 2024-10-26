docker compose down
docker compose -f compose.yaml -f compose.prod.yaml up --build --force-recreate --remove-orphans