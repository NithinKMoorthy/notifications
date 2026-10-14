# Node 22 — current LTS runtime.
FROM node:22
WORKDIR /app
COPY package.json .
RUN npm install --no-audit --no-fund
COPY index.js .
EXPOSE 3001
CMD ["node", "index.js"]
