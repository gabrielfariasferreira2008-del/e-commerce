import { Component,Input,Output,EventEmitter, output } from '@angular/core';
import { UpperCasePipe, } from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { TmplAstDirective } from '@angular/compiler';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
@Component({  

  selector: 'app-produto',
  imports: [ UpperCasePipe, PrecoFormatadoPipe, MatButtonModule, MatCardModule, MatIconModule, RouterLink],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
 export class Produto {

  @Input() nome: string = '';
  @Input() preco: number = 0;

 // @Output() produtoSelecionado = new EventEmitter<string>();
  @Output() produtoSelecionado = new EventEmitter<string>();

  selecionarProduto() {
    this.produtoSelecionado.emit(this.nome);
  }

@Output() produtoAdicionado = new EventEmitter<{
  nome: string;
  preco: number;
}>();

adicionarAoCarrinho() {
  this.produtoAdicionado.emit({ nome: this.nome, preco: this.preco });
}

 } 
