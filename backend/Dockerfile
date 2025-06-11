
FROM node:20-alpine AS base
WORKDIR /usr/src/app


FROM base AS dependencies
COPY package*.json ./
RUN npm install


FROM dependencies AS build
COPY . .
RUN npm run build


FROM base AS production
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY package*.json ./


CMD ["node", "dist/main"]