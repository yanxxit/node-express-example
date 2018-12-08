FROM mhart/alpine-node:8

MAINTAINER  yanxxit #node_v8_latest
RUN node -v

RUN mkdir -p /data/code
WORKDIR /data/code

COPY . /data/code

RUN ls
# RUN ls && npm install --production --registry=https://registry.npm.taobao.org && ls


EXPOSE 8600

CMD [ "node","index.js" ]