import { inject, } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService} from "./services/Auth.service";
import { CanActivateFn } from "@angular/router";



export const adminGuard: CanActivateFn = () => {
const authService = inject(AuthService);
const router = inject(Router);
// Primeiro verifica se o usuário está logado.
// Se não estiver, envia para a tela de login.
if (!authService.estaLogado()) {
return router.createUrlTree(['/login']);
}
// Depois verifica se o usuário possui perfil de administrador.
// Se estiver logado, mas não for admin, envia para produtos.
if (!authService.admin()) {
return router.createUrlTree(['/acesso-negado']);
}
// Se estiver logado e for admin, libera o acesso.
return true;

 }