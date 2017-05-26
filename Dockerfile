FROM node:7  as build

WORKDIR /work

ADD /package.json /work/
ADD /yarn.lock /work/

RUN yarn install

ADD / /work

RUN yarn test
RUN yarn build


### ---

FROM nginx:alpine
LABEL maintainer "team@breizhcamp.org"

COPY nginx.conf /etc/nginx/conf.d/cfpio.conf
COPY --from=build /work/dist /www

# Clever cloud require the container to listen on port 8080
ENV NGINX_PORT=8080
EXPOSE 8080
