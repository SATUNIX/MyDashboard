FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files & install deps
COPY package*.json ./
RUN npm install
# Copy the rest of your app
COPY cors-proxy.js .

# Expose the desired port
EXPOSE 19121

# Run the app
CMD ["node", "cors-proxy.js"]

