import { inject, Inject,  } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService} from "./services/Auth.service";
 export const adminGuard CanActivatefn = () => {

    const router = inject(Router)
    const authService = inject (AuthService)
    if(! authService. usuarioLogado()){
        return router.createUrlTree(['/login'])

    }

    if(!authService.enadmin()){
        return router.createUrlTree (['/acesso-negado'])

    }
    return true;

 }