FROM node:6

MAINTAINER team@breizhcamp.org

WORKDIR /work

RUN npm install -g yarn@0.17.8
ADD /package.json /work/
ADD /bower.json /work/
ADD /.bowerrc /work/
ADD /yarn.lock /work/

RUN yarn install

ADD / /work

RUN yarn test
RUN yarn build

RUN mkdir /www
RUN mv /work/dist /www/front

VOLUME /www/front

