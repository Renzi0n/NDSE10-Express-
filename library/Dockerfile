FROM node:15.6

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
RUN npm install
COPY src ./src

EXPOSE 4000

CMD [ "npm", "run", "start"]