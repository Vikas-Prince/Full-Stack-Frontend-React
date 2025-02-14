# Build Stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json first to optimize caching
COPY package*.json ./

# Install all dependencies (including dev dependencies for the build)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production Stage
FROM node:18-slim AS production

# Set working directory for production stage
WORKDIR /app

# Copy the build artifacts from the build stage
COPY --from=build /app/build ./build

# Install 'serve' globally to serve the static build
RUN npm install -g serve

# Expose port 3000 for the app
EXPOSE 3000

# Command to run the app with serve
CMD ["sh", "-c", "serve -s /app/build -l 3000"]
