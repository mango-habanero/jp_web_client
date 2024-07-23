FROM node:20.12.0-alpine AS build

ARG SOURCE_COMMIT

LABEL maintainer="Mango Habanero <main@mango-habanero.dev>"
LABEL description="A sample vite web client application to showcase fullstack abilities for the jungopharm interview process."
LABEL repository="https://github.com/mango-habanero/jp_web_client.git"
LABEL homepage="https://jp.mango-habanero.dev"
LABEL revision=${SOURCE_COMMIT:-unknown}

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 8000

CMD [ "serve", "dist", "-s", "-l", "8000" ]
