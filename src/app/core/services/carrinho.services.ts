import{Injectable} from '@angular/core';
import{signal} from '@angular/core';
import{computed} from '@angular/core';

type ItemCarrinho = {
    nome: string;
    preco: number;

}
@Injectable({
 providedIn: 'root'
})
export class CarrinhoService {
 
    private carrinho = signal<ItemCarrinho[]>([]);
    //?seletores
    item=computed(() => this.carrinho());
    quantidade=computed(() => this.carrinho().length);
    total=computed(() =>
         this.carrinho().reduce((total, item) =>
            total + item.preco, 0)
);
carrinhoVazio = computed(() => this.carrinho().length === 0); 
//TODO: Ações
adicionarItem(produto: ItemCarrinho) {
    this.carrinho.update(lista=> [...lista, produto]);
}  
limparCarrinho() {    
 }
 }
