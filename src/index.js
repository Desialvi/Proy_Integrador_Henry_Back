// const express = require('express');
const server = require('./server');
    
//server.get('/', (req, res) => {
//    res.send('¡Hola Mundo!');
//});

const PORT = 3001;
server. listen(PORT, () => {
   console.log(`El servidor está corriendo en el puerto ${PORT}`)
});
