FROM node:10
MAINTAINER Roger Russel <roger@rrussel.org>

ENV TERM=xterm
ENV TZ=America/Sao_Paulo

WORKDIR /opt/js-cool-math

RUN apt-get update && apt-get install -y \
  git \
  zip \
  unzip \
  curl \
  build-essential \
  && rm -rf /var/lib/apt/lists/*

RUN npm install --global webpack

CMD npm run start || tail -f /dev/null
