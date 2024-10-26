FROM node:20-slim AS build
WORKDIR /app
COPY front/package*.json ./
RUN npm install
COPY front/ ./
RUN npm run build

FROM nginx:alpine3.20-slim
COPY nginx.conf /etc/nginx/nginx.conf.template
COPY --from=build /app/dist/ /usr/share/nginx/html
COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]
