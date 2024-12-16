FROM node:20.17

WORKDIR /app
COPY /duke-chat .
RUN npm install

ENTRYPOINT [ "npm", "run", "dev" ]
