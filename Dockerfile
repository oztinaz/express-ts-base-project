FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

#Build to project
RUN npm run build

# Run node server
CMD npm run start
