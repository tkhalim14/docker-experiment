FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

ENV PORT=8080

EXPOSE 8080

CMD [ "node" , "index" ]