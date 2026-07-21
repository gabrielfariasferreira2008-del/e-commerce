import { Component, importProvidersFrom, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ListaProdutos } from './features/Produtos/lista-produtos/lista-produtos';// 


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  nomeLoja = 'MagaLucia';//nome do e-commerce
}
