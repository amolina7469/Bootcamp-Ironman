import { Component } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {

  arrClientes: any[];

  constructor(private clientesService: ClientesService){
    this.arrClientes = [];
  }

  async ngOnInit() {
    this.getData();
  }

  async pulsaBorrar(clienteId: number) {
    await this.clientesService.deleteById(clienteId);
    this.getData();
  }

  async getData() {
    const response = await this.clientesService.getAll();
    this.arrClientes = response;
  }

}
