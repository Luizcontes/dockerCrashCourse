# This Dockerfile is used to create a image and using instructions we add layers
#  to our container in order to get the application we need, the source code and also
#  installing every depency needed for our project

# The main distinction is that here we are writing code for the building process
#  In here goes everything required to build a blueprint which later will be used to get every part
#  together, then we can run commands in the running container

FROM node:16-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .


#EXPOSE 4000

CMD ["npm", "run", "dev"]