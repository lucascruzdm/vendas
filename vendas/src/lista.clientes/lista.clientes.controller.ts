import { Controller, Get } from "@nestjs/common";
import { ListaClientesService } from "./lista.clientes.service";

@Controller('lista-clientes')
export class ListaClientesController {
    constructor(private readonly listaClientesService: ListaClientesService){}
@Get()
listaClientes(): string {
    return this.listaClientesService.listaClientes();
}
}
