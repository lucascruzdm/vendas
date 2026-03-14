import { Controller, Get } from '@nestjs/common';
import { ClientesService } from './clientes.service';


@Controller('clientes')
export class ClientesController {

     constructor(private clientesService: ClientesService) {}
    
      @Get()
      listarClientes(){
        return this.clientesService.listarClientes();
      }
      




    }


    