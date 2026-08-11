import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import{ MatToolbarModule } from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { inject } from '@angular/core';
import { CarrinhoService } from '../../../core/services/carrinho.services';
import { AuthService } from '../../../core/services/Auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class header {
  nomeLoja = 'MagaLucia'; //nome do e-commerce
  private carrinhoService = inject(CarrinhoService);
  quantidade = this.carrinhoService.quantidade;
  private authService = inject (AuthService)
  
}
