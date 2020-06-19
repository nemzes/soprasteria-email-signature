FROM node:14-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1-alpine
WORKDIR /app
ADD ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /app
