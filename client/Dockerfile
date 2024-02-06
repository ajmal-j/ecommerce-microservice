FROM node:alpine

WORKDIR /client

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm" , "run" , "dev" ]