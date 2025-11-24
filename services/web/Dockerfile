FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json .
RUN npm install --production=false

FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY package.json .
COPY tsconfig.json next.config.mjs ./
COPY app ./app
COPY components ./components
RUN npm run build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/.next ./.next
COPY package.json .
COPY next.config.mjs ./
RUN npm install --production=true && npm cache clean --force
EXPOSE 3000
CMD ["npm", "run", "start"]

