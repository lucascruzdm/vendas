import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';
import { ListaClientesModule } from './lista.clientes/lista.clientes.module';

@Module({
  imports: [HealthCheckModule,ListaClientesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
