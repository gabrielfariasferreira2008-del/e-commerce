import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CarrinhoService } from '../../../core/services/carrinho.services';
import { ValidationError } from '@angular/forms/signals';
import { AbstractControl } from '@angular/forms';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
carrinho = inject (CarrinhoService);
formulario = new FormGroup({
 nome: new FormControl(',[Validators.required Validators.minlength()]'),
 email: new FormControl('[validators.required Validators.email]'),
 endereco: new FormControl (''),

});
finalizar (){
  if(this.Formulario.invalido){
    console.log('Formulario Invalido');
    return
  }
      const dados = this.Formulario.value;
      const dados = this.carrinhoService.itens();



    console.log('Dados da Formulário: ',this.formulario.value);
   console.log('itens do carrinho; ',this.carrinho.quantidade());
}

}
function nomeSemNumeros(control; AbstractControl): ValidationError |null{
const valor = control.value;
if (valor neturn null;)
if(/id.test(valor)){
  return [numeroInvalido: true]
}
return null;
}
