# Stage 1: Build stage using Bun
FROM oven/bun:1.3.10-alpine AS builder
WORKDIR /app

# Copy dependency configs
COPY package.json bun.lock ./

# Install dependencies using bun package manager
RUN bun install --frozen-lockfile

# Copy source code files
COPY . .

# Compile and build using bun compiler script
RUN bun run build

# Stage 2: Serve stage using Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
