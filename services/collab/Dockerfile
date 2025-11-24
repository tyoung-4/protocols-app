
FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install --production=true
COPY index.js .
EXPOSE 1234
CMD ["node", "index.js"]

