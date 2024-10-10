import express from 'express';
import "dotenv/config.js";

const server = express();
const PORT = process.env.PORT || 8080;

const ready = () => console.log("server ready in port "+ PORT);

server.get('/', (request,response)=> {
        response.send('hello world en express');
})

server.get('/saludo', (request,response)=> {
        response.send([{nombre: 'samuel', edad:  '23'}, {nombre: 'alejandro', edad: '24'}]);
})


server.listen(PORT, ready);


