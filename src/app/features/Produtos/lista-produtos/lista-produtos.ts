import { Component, signal } from '@angular/core';
import { Produto } from '../produto/produto';
import{computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
produtos = signal([
    { nome: 'Teclado Gamer', preco: 100.99 },
    { nome: 'Mouse Gamer', preco: 25.99 },
    { nome: 'Monitor Gamer', preco: 300.99 },
    { nome: 'Desktop Gamer', preco: 1500.49 },
    { nome: 'Headset Gamer', preco: 100.75 }
  ]);
exibirProduto(nome: string) {
  console.log('Produto selecionado:', nome);
  }
  adicionarProduto() {
    this.produtos.update((ListaAtual) => [
      ...ListaAtual, {nome: 'Sony PlayStation 5', preco: 100.99}
    ]);
  }
  totalProdutos = computed(() => this.produtos().length);
  valorTotal = computed(() => {
    return this.produtos().reduce((total, item) => total + item.preco, 0);
  });
  subtituirProdutos() {
    this.produtos.set([
      { nome: 'Arroz Fazenda', preco: 400},
    ]);
  }
}
