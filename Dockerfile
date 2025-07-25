# Stage 1: Build the application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy application code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the application using a lightweight server
FROM nginx:alpine

# Copy the built app to Nginx's HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]