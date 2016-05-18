FROM node:6

MAINTAINER team@breizhcamp.org

WORKDIR /work
ADD / /work

RUN npm install && npm run build


