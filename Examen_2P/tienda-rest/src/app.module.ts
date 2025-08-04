import { Module } from '@nestjs/common';
import { CategoriaController } from './controllers/categoria.controller';
import { PedidoController } from './controllers/pedido.controller';
import { PagoController } from './controllers/pago.controller';
import { ProductoController } from './controllers/producto.controller';
import { CategoriaService, PedidoService, PagoService, ProductoService } from '../../../domain';

@Module({
  imports: [],
  controllers: [CategoriaController, PedidoController, PagoController, ProductoController],
    providers: [CategoriaService, PedidoService, PagoService, ProductoService],
})
export class AppModule {}
