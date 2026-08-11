import { HttpInterceptorFn } from "@angular/common/http";
import { error } from "console";
import { catchError, tap, throwError } from "rxjs";
import { inject } from "@angular/core";
import { AuthService, AuthService } from "../services/Auth.service";



export const httpinterceptor: HttpInterceptorFn = (req, next) => {
    
    const authService =inject(AuthService);
    
    const toker = 'fake-jwt-tpker';
    console.log ('inteceptando requisição: ', req.url); 

    const novaReq = toker ?
     req.clone ({ 
        setHeaders: {
            Authorization: 'Beacer ${token}'
        }

    });req;

 
 return next (novaReq).pipe(
      tap({
            next: (event) => console.log ('RESPONDE:', event),
            error: (error) => console.log ('ERRO',  error)
         }),
        
         catchError ((error) =>{
 console.error ('ERRO GLOBAL: ', error);
             
            if (error.status === 401){
                 console. warn ('NÃO Autorizado');

            }
            if (error.status === 500){
                 console.warn ('Erro Interno do Servidor');
           
                
            };
 return throwError (() => error);

         }),
        )
           
};