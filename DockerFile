
FROM google/nodejs

COPY package.json /src/package.json
RUN cd /src && npm install --production

COPY . /src

CMD ["node", "/src/index.js"]
