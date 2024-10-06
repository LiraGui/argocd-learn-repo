FROM node:16.17.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

USER node

EXPOSE 3000
CMD ["node", "index.js"]