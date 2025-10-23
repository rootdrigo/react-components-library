FROM node:22-alpine
WORKDIR /basic-react-app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 5173
