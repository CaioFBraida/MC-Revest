import admin from 'firebase-admin';
import { ProdutosRepository } from './repository.js';
export class Produtos {
    nome;
    valor;
    vendedor;
    tamanho;
    preco;
    upcycling;
    condicao;
    marca;
    favorito;
    categoria;
    subcategoria;
    uid;
    img;

    #repository;

    constructor() {
        this.#repository = new ProdutosRepository();
    }

    findProducts() {
        return this.#repository.findProducts();
    }

    findByUid() {
        return this.#repository.findByUid(this.uid).then(productDb => {
           
            this.nome = productDb.nome
            this.valor = productDb.valor
            this.vendedor = productDb.vendedor
            this.preco = productDb.preco
            this.upcycling = productDb.upcycling
            this.condicao = productDb.condicao
            this.marca = productDb.marca
            this.favorito = productDb.favorito
            this.categoria = productDb.categoria
            this.subcategoria = productDb.subcategoria
            this.uid = productDb.uid
            this.img = productDb.img
                
        });
    }

}