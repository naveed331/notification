FROM node
WORKDIR /the/workdir/path
COPY ["packeage.json","package-lock.json","./"]

RUN npm install

COPY . .

CMD ["node","server.js"]

