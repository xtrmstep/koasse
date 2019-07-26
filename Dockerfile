FROM node:12
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . /app
CMD node koa-index.js
EXPOSE 3000
