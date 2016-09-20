
FROM node:6

COPY package.json /src/package.json
RUN cd /src && npm install --production

COPY . /src

CMD ["node", "/src/index.js"]
