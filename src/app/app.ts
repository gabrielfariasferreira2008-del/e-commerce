import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { header } from './shared/layout/header/header';
import { Carrinho } from "./features/carrinho/carrinho/carrinho";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, header, Carrinho],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  

}
