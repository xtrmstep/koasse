FROM node:12-slim
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . /app
CMD npm run prod
EXPOSE 3000
