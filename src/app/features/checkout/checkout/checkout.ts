import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CarrinhoService } from '../../../core/services/carrinho.services';
import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { signal } from '@angular/core';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {

carrinhoService = inject (CarrinhoService);
compraFinalizada = signal (false);

formulario = new FormGroup({
 nome: new FormControl('',[Validators.required, Validators.minLength(3)]),
 email: new FormControl('',[Validators.required, Validators.email]),
 endereco: new FormControl ('',[Validators.required, Validators.minLength(5)]),

});

finalizar (){
  this.compraFinalizada.set(false);
  if(this.carrinhoService.carrinhoVazio()){
    console.log ('Não e possivel finalizar uma compra no carrinho vazio.')
  return;
  }
  if(this.formulario.invalid) {
console.log('Formulário inválido');
this.formulario.markAllAsTouched();
return;
}
const dados= this.formulario.value;
const Item=this.carrinhoService. item();
const total=this.carrinhoService. total();
 console.log('Compra finalizada com sucesso!');
 console.log('Dados do fotmulario:',dados);
 console.log('Item do carrinho:', item);
 console.log('Total de compra:', total);

this.carrinhoService.limpar();
this.formulario.reset();
this.compraFinalizada.set(true);
}
}



  {

  }
  console.log ('Não é possivel finalizar a comprar com carrinho')
 return;

if (this.formulario Invalid); {
  console.log('formulario')
  return
   }
  const dados= this.formulario.vlue;
  const item= this.carrinhoService.item();
  const total= this.carrinhoSerevice.totalitem();{
    
  }

}
  

 function nomeSemNumeros(control: AbstractControl): ValidationErrors | null {

    const valor = control.value;

    if (!valor) return null;

    if (/\d/.test(valor)) {
      return { numeroInvalido: true };
    }

    return null;
  }


