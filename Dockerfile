FROM node:22-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Run Vite dev server exposed to all network interfaces inside container network namespace
CMD ["npm", "run", "dev", "--", "--host"]
