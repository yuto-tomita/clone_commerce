FROM nestjs/cli

RUN npm i -g yarn

WORKDIR /app

COPY server/package*.json ./
COPY server/yarn.lock ./

RUN yarn install

COPY ./server .

CMD ["yarn", "start:dev"]
