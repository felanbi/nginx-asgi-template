FROM node:20-slim AS build

WORKDIR /app
COPY front/ ./
RUN npm install && npm run build

FROM nginx:alpine3.20-slim

COPY nginx.conf /etc/nginx/nginx.conf.template
COPY --from=build /app/build/ /usr/share/nginx/html

COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]
