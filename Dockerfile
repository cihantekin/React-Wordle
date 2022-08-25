FROM node:17-alpine

WORKDIR /app

COPY . .

RUN npm install

#container port
EXPOSE 3000

#container çalışmaya başladığında cmd komutları çalıştırılır. ben de container ayağa kalktığında db serverın çalışmasını istiyorum.
CMD ["npm", "start"]