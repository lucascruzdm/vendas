import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';
import { ListaClientesModule } from './lista.clientes/lista.clientes.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [HealthCheckModule,ListaClientesModule, ClientesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
