import express, { request, response } from 'express';

const app = express();


// GET -> recuperar
// POST -> criar
// PUT -> atualizar
// DELETE -> deletar


app.get('/produtos', (request, response) => {
    console.log('GET produtos');
    response.json([{id:1,
        produto: "macacão azul"
    }])
})


app.listen(3000, () => console.log('API rest iniciada em http://localhost:3000'))