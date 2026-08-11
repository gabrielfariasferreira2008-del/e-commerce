import { CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "./services/Auth.service";
import { Router } from "express";
export const authGuard: CanActivateFn = () => {
    const authService = inject (AuthService);
    const router = inject (Router);
    if(authService. usuarioAtual()){
        return true;
    }
   return router.createUrltree(['/login']);
}


