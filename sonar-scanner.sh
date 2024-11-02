docker run \
    --rm \
    --network app-dev \
    --env-file .env \
    -v $1:/usr/src sonarsource/sonar-scanner-cli:11.1
