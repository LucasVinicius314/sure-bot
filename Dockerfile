FROM node:16.16.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./ /usr/src/app

RUN npm i -g typescript

RUN npm install
RUN npm run build

ENV NODE_ENV production

EXPOSE 80

CMD [ "npm", "start"]
