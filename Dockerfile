FROM node:24.21.0
COPY package*.json ./
RUN npm ci --only=production
COPY .
CMD ["node","./src/server.js"]