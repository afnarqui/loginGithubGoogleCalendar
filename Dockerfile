FROM node:alpine
COPY ./public /app
WORKDIR /app

RUN mkdir -p logs && \
    npm install && \
    npm install pm2 -g

EXPOSE 3200
CMD npm run start