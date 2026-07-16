import { Component, importProvidersFrom, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { Produto } from './components/produto/produto';
import { ListaProdutos } from './features/Produtos/lista-produtos/lista-produtos';// import { ListaProdutos } from './components/produto/lista-produtos/lista-produtos';

@Component({
  selector: 'app-root',
  imports: [ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
