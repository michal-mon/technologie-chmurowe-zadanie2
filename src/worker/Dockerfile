FROM node:alpine
ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR "/app"
RUN npm init -y
COPY **/package.json **/
RUN NODE_ENV=development npm i
COPY /** /**
CMD ["npm", "run", "start"]
