FROM node:latest as base
#RUN --mount=type=secret,open_weather_api_token=open_weather_api

WORKDIR /usr/app

COPY . /usr/app/
EXPOSE 3000

RUN npm install
RUN npx prisma generate

