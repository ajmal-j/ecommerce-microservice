FROM node:alpine

WORKDIR /product

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm" , "start" ]