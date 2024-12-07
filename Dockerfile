FROM node:22-slim
RUN corepack enable
WORKDIR /app
COPY package.json ./
RUN pnpm install
COPY . .
ENV VITE_API_URL=/api
RUN pnpm run build
