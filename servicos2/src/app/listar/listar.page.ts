import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { Cliente } from '../models/cliente.model'
import { ClienteService } from '../service/cliente.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  
  private cliente: Cliente[];

  constructor(private clienteService: ClienteService,
    private router: Router) {}

  

  ngOnInit(): void {
    this.listaCliente();
  }
  listaCliente() {
    this.clienteService.getClientes().subscribe(
    clienteDB => this.cliente = clienteDB,
    erroDB => console.log(erroDB)
  );



}
}