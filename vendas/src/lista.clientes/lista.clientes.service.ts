import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class ClientesService {

  constructor(private prisma: PrismaService) {}

  async listarClientes() {
    return this.prisma.cliente.findMany();
  }

}