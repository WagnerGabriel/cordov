import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  teste = [
    {nome: "A1", checado: false},
    {nome: "A2", checado: false},
    {nome: "A3", checado: false},
    {nome: "A4", checado: false},
    {nome: "A5", checado: false},
    {nome: "A6", checado: false},
    {nome: "A7", checado: false},
  ]
}
