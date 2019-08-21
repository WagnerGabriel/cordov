import { Component, OnInit } from '@angular/core';
import {Cliente} from '../models/cliente.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  formCliente: FormGroup;

  messageEmail = ""
  messageSenha = "";
  messageEndereco = ""
  messageNome = "";
  errorEmail = false;
  errorPassword = false;
  errorEndereco = false;
  errorNome = false;

  constructor( 
    private formBuilder: FormBuilder,//Metodo de validação
    //metodo criados para manipular os dados da base
    private clienteService: ClienteService,
    //Rota para uma outra página, para resposta ao úsuario
    private router: Router

  ) {
  }
  
  ngOnInit(): void {

    this.formCliente = this.formBuilder.group({
      nome: ["", 
        //parâmetro responsável pela validação de conteudo do campo
        [
          Validators.required, //Campo requerido
          Validators.minLength(2), //Quantidade minima de caracteres
          Validators. maxLength(100), //Quantidade maxíma de caracteres*/
          Validators.pattern(/^[a-zA-Z@]+$/),//Validação de caracteres
        ]
        ],
      email:[
          '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.email
        ]
      ],
      endereco:[ 
          '',
        [
          Validators.required,
          Validators.maxLength(100),
        ]
      ],
      senha:[
          '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
        ]
      ]
    })
  }

  add() {

      const novoCliente = this.formCliente.getRawValue() as Cliente;

      this.clienteService.addCliente(novoCliente)

       .subscribe(
        () => this.router.navigateByUrl('sucesso'),

        error => {
        console.log(error);
        this.formCliente.reset();
     
    } )
  }
  login(){
    let { nome, senha, endereco, email} = this.formCliente.controls;
  
    if (!this.formCliente.valid) {
      if (!nome.valid) {
        this.errorNome = true;
        this.messageNome = "Deu erro muito errado!!! Como foi que eu apareci aqui????";
      }else{
        this.errorNome = false;
        this.messageNome = ""
      }
      if (!senha.valid) {
        this.errorPassword = true;
        this.messageSenha ="A senha precisa ter de 6 a 20 caracteres"
      }
      else{
        this.errorPassword = false;
        this.messageSenha =""
      }
      if (!endereco.valid){
        this.errorEndereco = true;
        this.messageEndereco = "O endereco tem que conter no maximo 100 caracteres"; 
      }
      else{
        this.errorEndereco = false;
        this.messageEndereco = ""

      }
      if (!email.valid){
        this.errorEmail = true;
        this.messageEndereco= "Deu erro";

      }
      else{
        this.errorEmail =false;
        this.messageEmail ="";
      }
      
    }
    else {
      alert("Login Realizado");
    }
}
}