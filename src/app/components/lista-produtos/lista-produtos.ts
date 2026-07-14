import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
produtos = [
    { nome: 'Teclado Gamer', preco: 100.99 },
    { nome: 'Mouse Gamer', preco: 25.99 },
    { nome: 'Monitor Gamer', preco: 300.99 },
    { nome: 'Desktop Gamer', preco: 1500.49 },
    { nome: 'Headset Gamer', preco: 100.75 }
];
  }
