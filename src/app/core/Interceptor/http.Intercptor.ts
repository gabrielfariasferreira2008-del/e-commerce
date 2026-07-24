import { HttpInterceptorFn } from "@angular/common/http";
import { error } from "console";
import { catchError, tap, throwError } from "rxjs";

export const httpinterceptor: HttpInterceptorFn = (req, next) => {
    
    const toker = 'fake-jwt-tpker';
    
    const novaReq = req.clone ({ 
        setHeaders: {
            Authorization: 'Bearer ${token}',
        },  
    });  
 console.log ('inteceptando requisição: ', req.url); 
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