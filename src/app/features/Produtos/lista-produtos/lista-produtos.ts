import { Component, signal, computed, effect, inject } from '@angular/core';
import { Produto } from '../produto/produto';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { UpperCasePipe } from '@angular/common';
import { ProdutosService } from '../produtos.service';

@Component({
selector: 'app-lista-produtos',
imports: [Produto, PrecoFormatadoPipe, UpperCasePipe],
templateUrl: './lista-produtos.html',
styleUrl: './lista-produtos.css',
})

export class ListaProdutos {
  // ===== SIGNALS =====
// AGORA VEM DA API (inicia vazio)
produtos = signal<{ nome: string; preco: number }[]>([]);

produtoSelecionado = signal<string | null>(null);

// Carrinho continua igual
carrinho = signal<{ nome: string; preco: number }[]>([]);

// controle de carregamento
carregando = signal(true);

private produtosService = inject(ProdutosService);
error = signal


// ===== COMPUTED =====
totalProdutos = computed(() => this.produtos().length);
valorTotal = computed(() => {
return this.produtos()
.reduce((total, item) => total + item.preco, 0);
});
quantidadeCarrinho = computed(() => this.carrinho().length);
totalCarrinho = computed(() => {
return this.carrinho()
.reduce((total, item) => total + item.preco, 0);
});
// ===== CONSTRUTOR =====
constructor() {
// carrega da API
this.carregarProdutos();
// effects continuam iguais
effect(() => {
console.log('Lista de produtos alterada:', this.produtos());
});
effect(() => {
console.log('Valor total atualizado:', this.valorTotal());
});
effect(() => {
if (typeof document !== 'undefined') {
document.title = `(${this.totalProdutos()}) Minha Loja`;
}
});
}
// ===== MÉTODO HTTP (API) =====

carregarProdutos() { //Ativa. laading
this.carregando.set(true);  //Limpar erro

this.produtosService.buscarProdutos().subscribe({
next: (dados) => {
const produtos = this.produtosService.transformarProdutos(dados);
this.produtos.set(produtos);
this.carregando.set(false);
},
error: (erro) => {
console.error('Erro ao carregar produtos:', erro);
this.carregando.set(false);
},
});
}
// ===== MÉTODOS EXISTENTES (INALTERADOS) =====
exibirProduto(nome: string) {
this.produtoSelecionado.set(nome);
}

adicionarProduto() {
this.produtos.update(listaAtual => [
...listaAtual,
{ nome: 'Teclado', preco: 250 }
]);
}

substituirProdutos() {
this.produtos.set([
{ nome: 'Produto novo', preco: 999 }
]);
}

adicionarAoCarrinho(produto: { nome: string; preco: number }) {
this.carrinho.update(listaAtual => [
...listaAtual,
produto
]);
}
}
