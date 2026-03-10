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

# Copy package files and install production dependencies only
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

# Copy built assets from builder
COPY --from=builder /app/dist ./dist

# Copy server and data
COPY server.js ./
COPY --from=builder /app/data ./data

# Cloud Run expects the container to listen on $PORT (defaults to 8080)
ENV PORT 8080
EXPOSE 8080

# Run the node server
CMD ["node", "server.js"]
