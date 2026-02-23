# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install 'serve' to handle static file serving
RUN npm install -g serve

# Copy built assets from builder
COPY --from=builder /app/dist ./dist

# Cloud Run expects the container to listen on $PORT (defaults to 8080)
ENV PORT 8080
EXPOSE 8080

# Serve the static files
# -s: Single Page App routing (redirects to index.html)
# -l: Port to listen on
CMD ["sh", "-c", "serve -s dist -l $PORT"]
