FROM node:12-alpine AS builder
COPY . ./angular-example-app
WORKDIR /angular-example-app
RUN npm install
RUN npm run build:prod:en

FROM nginx:1-alpine
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /angular-example-app/dist/browser/ /usr/share/nginx/html
EXPOSE 80
