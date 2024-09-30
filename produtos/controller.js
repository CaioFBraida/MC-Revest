import admin from 'firebase-admin'
import { Produtos } from './model.js';

export class ProdutosController {

    findProducts (request, response) {
        console.log('GET produtos');
    
        const produto = new Produtos();
        produto.findProducts().then(produtos => {
            response.json(produtos);
        }).catch(error => {
            response.status(error.code).json(error);
        })
    }

    findByUid (request, response) {
        //this.#produto.uid = request.params.uid
    }
}