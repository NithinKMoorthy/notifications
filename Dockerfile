# Node 14 — EOL runtime, matches the service's real state.
FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install --no-audit --no-fund
COPY index.js .
EXPOSE 3001
CMD ["node", "index.js"]
