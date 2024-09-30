import express from 'express';
import { ProdutosController } from './controller.js';

const app = express();

const produtosController = new ProdutosController();

app.get('/', produtosController.findProducts);

export const produtosRouter = app;