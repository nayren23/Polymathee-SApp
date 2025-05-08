# Overridable default docker registry
ARG registry=docker.io

FROM ${registry}/library/node:20.9-alpine

WORKDIR /app

ENV production=true
ENV backUrl='https://127.0.0.1:5050'
ENV frontUrl='http://localhost:4200'

#Copy package.json and package-lock.json to avoid reinstalling dependencies when only code changes
COPY package*.json ./

RUN npm install --force

COPY . .

#Which port the container will listen to
EXPOSE 4200

#Build the app Angular
RUN npm install -g @angular/cli@18.1.2 

RUN apk add --no-cache gettext

ENTRYPOINT [ "ng" ]
CMD ["serve", "--host", "0.0.0.0"]
