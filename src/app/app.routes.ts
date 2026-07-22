import { Routes } from '@angular/router';
import  {authGuarad} from '@angular/core'

export const routes: Routes = [
{
    path:'',
    loadComponent: () =>
    import ('./features/home/home/home').then((m) => m.Home),
},
{
  path: 'produtos',
  loadComponent: () =>
    import('./features/Produtos/lista-produtos/lista-produtos').then((m) => m.ListaProdutos),
},
{
    path: 'carrinho',
    loadComponent: (authGuard) =>
   import ('./features/carrinho/carrinho/carrinho').then((m) => m.Carrinho),
},
{
  path: '**',
  redirectTo: '',
},
];
