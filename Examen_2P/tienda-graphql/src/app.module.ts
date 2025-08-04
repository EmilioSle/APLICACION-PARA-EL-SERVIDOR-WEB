
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CategoriaResolver } from './resolvers/categoria.resolver';
import { CategoriaService } from './services/categoria.service';
import { PedidoResolver } from './resolvers/pedido.resolver';
import { PedidoService } from './services/pedido.service';
import { PagoResolver } from './resolvers/pago.resolver';
import { PagoService } from './services/pago.service';
import { ProductoResolver } from './resolvers/producto.resolver';
import { ProductoService } from './services/producto.service';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    CategoriaResolver,
    CategoriaService,
    PedidoResolver,
    PedidoService,
    PagoResolver,
    PagoService,
    ProductoResolver,
    ProductoService
  ],
})
export class AppModule {}
