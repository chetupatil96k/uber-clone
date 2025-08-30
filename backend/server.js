const http=require('http');
const express = require('express');
const app=require('./app');
const port=process.env.PORT || 3000;
app.use(express.json());


const server=http.createServer(app);



server.listen(port,() =>{
    console.log(`server is running ${port}`);
})
