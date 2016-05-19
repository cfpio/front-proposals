FROM node:6

MAINTAINER team@breizhcamp.org

RUN echo '{ "allow_root": true }' > /root/.bowerrc
WORKDIR /work

ADD /package.json /work/
ADD /bower.json /work/
ADD /.bowerrc /work/
ADD /gulpfile.js /work/
ADD /npm-shrinkwrap.json /work/

RUN npm install --unsafe-perm

ADD / /work

RUN npm run build


