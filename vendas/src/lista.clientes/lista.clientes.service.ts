import { Injectable } from "@nestjs/common";

@Injectable()
export class ListaClientesService{
 listaClientes(): string {
    return 'lista de clientes';
 }
}