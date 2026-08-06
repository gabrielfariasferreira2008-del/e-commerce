import{Injectable} from '@angular/core';
import{signal} from '@angular/core';
import{computed} from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class CarrinhoService {
 
    private carrinho = signal<{nome: string, preco: number}[]>([]);
    //?seletores
    item=computed(() => this.carrinho());
    quantidade=computed(() => this.carrinho().length);
    total=computed(() =>
         this.carrinho().reduce((total, item) => total + item.preco, 0)
);
//TODO: Ações
adicionarItem(produto: {nome: string, preco: number}) {
    this.carrinho.update(lista=> [...lista, produto]);
}  
limparCarrinho() {    
 }
 }
