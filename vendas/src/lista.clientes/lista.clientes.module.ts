import {Module } from "@nestjs/common";
import { ListaClientesController } from "./lista.clientes.controller";
import { ListaClientesService } from "./lista.clientes.service";

@Module({
    imports: [],
    controllers: [ListaClientesController],
    providers: [ListaClientesService]
})

export class ListaClientesModule{}