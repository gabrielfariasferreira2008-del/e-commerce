import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/Auth.service';
import { Router } from '@angular/router';
import { routes } from '../../../app.routes';
import { usuarioLogado } from '../../../core/auth';
@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
 private authService = inject (AuthService)
 private Router = inject (Router)

 //simulação - Imdicadores 

 usuarioAtual = this.authService.usuarioAtual


}






