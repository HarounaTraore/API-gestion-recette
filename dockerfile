FROM node:18

WORKDIR /usr/index

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3010

CMD ["npm", "start"]
