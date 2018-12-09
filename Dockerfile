FROM mhart/alpine-node:8

MAINTAINER  yanxxit #node_v8_latest
# RUN node -v

RUN mkdir -p /code/
VOLUME [ "/code/" ]
WORKDIR /code

COPY . /code

# RUN ls
# RUN ls && npm install --production --registry=https://registry.npm.taobao.org && ls


EXPOSE 8600

CMD [ "node","index.js" ]

# docker run -d -p 8600:8600 -v $PWD/logs:/code/logs 8206e1e534d1
# docker run -d -p 8600:8600 -v /home/mohoo/logs/express:/code/logs 4dac0cb1ace6
# docker exec -it 99497ce75801 /bin/sh