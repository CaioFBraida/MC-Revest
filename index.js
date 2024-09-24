import express, { request, response } from 'express';
import admin from 'firebase-admin';
const app = express();


admin.initializeApp({
    credential: admin.credential.cert("serviceAccountKey.json")
});

// GET -> recuperar
// POST -> criar
// PUT -> atualizar
// DELETE -> deletar


app.get('/produtos', (request, response) => {
    console.log('GET produtos');

    admin.firestore()
        .collection('produtos')
        .get()
        .then(snapshot => {
            const produtos = snapshot.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
            }))
            response.json(produtos)
        });
})


app.listen(3000, () => console.log('API rest iniciada em http://localhost:3000'))