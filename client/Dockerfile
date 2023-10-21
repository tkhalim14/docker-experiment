From node:20

WORKDIR /react-app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm" , "start"]