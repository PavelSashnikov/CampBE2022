FROM node:16.13.1-alpine3.14 as nodeV

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm i typeorm  @nestjs/cli -g

COPY . .

EXPOSE ${PORT}

CMD ["npm", "run", "start:dev"]