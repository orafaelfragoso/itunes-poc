FROM node:8

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
RUN yarn global add nodemon
COPY . .
RUN yarn build

CMD [ "yarn", "start" ]
