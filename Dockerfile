FROM node:16.16.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/

RUN npm i -g typescript

RUN npm install
RUN npm run build

COPY ./ /usr/src/app

ENV NODE_ENV production

CMD [ "npm", "start"]
