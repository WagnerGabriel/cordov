import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-oficial',
  templateUrl: './oficial.page.html',
  styleUrls: ['./oficial.page.scss'],
})
export class OficialPage implements OnInit {

  formoficial: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formoficial = this.formBuilder.group({
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
          Validators.maxLength(20),
        ]
      ]
    })
  }

}
