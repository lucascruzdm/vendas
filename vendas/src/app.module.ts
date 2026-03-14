import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [HealthCheckModule, ClientesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
