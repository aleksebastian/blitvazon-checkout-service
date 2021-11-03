# syntax=docker/dockerfile:1

FROM node:12.18.1

ENV NODE_ENV=production

ENV MODE=prod

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY wait-for-it.sh /usr/wait-for-it.sh

RUN chmod +x /usr/wait-for-it.sh

COPY . .

# CMD ["npm", "start"]