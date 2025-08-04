
import { Module } from '@nestjs/common';
import { CategoriaGateway } from './gateways/categoria.gateway';
import { CategoriaService } from './services/categoria.service';
import { PedidoGateway } from './gateways/pedido.gateway';
import { PedidoService } from './services/pedido.service';
import { PagoGateway } from './gateways/pago.gateway';
import { PagoService } from './services/pago.service';
import { ProductoGateway } from './gateways/producto.gateway';
import { ProductoService } from './services/producto.service';

@Module({
  imports: [],
  providers: [
    CategoriaGateway,
    CategoriaService,
    PedidoGateway,
    PedidoService,
    PagoGateway,
    PagoService,
    ProductoGateway,
    ProductoService
  ],
})
export class AppModule {}
