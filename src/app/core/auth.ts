import { signal } from '@angular/core';
export const usuariologado = signal (false);

export function login() {
    usuariologado.set(true);   
}
export function logout(){
usuariologado.set(false);
}
 
    

