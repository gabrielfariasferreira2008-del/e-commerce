import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { login, usuarioLogado, logout } from './core/auth';
import { Header } from './shared/layout/header/header';
import { Carrinho } from "./features/carrinho/carrinho/carrinho";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, Carrinho],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  
  usuariologado = usuarioLogado;
  login = login;
  logout = logout;
}
