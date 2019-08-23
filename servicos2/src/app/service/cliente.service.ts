import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Cliente} from '../models/cliente.model';
//Realizar a conexão com o servidor carregando o driver do banco.
const API_URL = 'http://localhost:3000';
const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type' : 'application/json; charset=utf-8'} 
  )
};


@Injectable({
  providedIn: 'root'
})
//Configurar a manipulação dos dados  recebidos pelo formulário//
export class ClienteService {

  constructor(private http:HttpClient) { }

  /* CRUD */
  //Inserir os dados do cliente//
  
  addCliente(cliente: Cliente){
    return this.http.post<Cliente>(`${API_URL}/cliente`, cliente, httpOptions);
  }

  getCliente(matricula:string){
    return this.http.get<Cliente[]>(`${API_URL}/cliente?matricula`, httpOptions);
  }
  //
  getClientes() {
    return this.http.get<Cliente[]>(`${API_URL}/cliente`, httpOptions);
  }
  
  //
  updateCliente(cliente:Cliente){
    return this.http.post<Cliente[]>(`${API_URL}/cliente`, cliente ,httpOptions);
  }

  //Apagar registro//
  deleteCliente(email:string){
    return this.http.delete(`${API_URL}/cliente/${email}`,httpOptions);
  }
  

 
}