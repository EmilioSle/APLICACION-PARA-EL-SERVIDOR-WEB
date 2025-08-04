import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PedidoService } from '../services/pedido.service';
import { Pedido, PedidoDto } from '../../../domain';
import { ResolveField, Parent } from '@nestjs/graphql';

@Resolver(() => Pedido)
export class PedidoResolver {
  private readonly pedidoService = new PedidoService();

  @Query(() => [Pedido])
  obtenerPedidos(): Pedido[] {
    return this.pedidoService.obtenerPedidos();
  }

  @Mutation(() => Pedido)
  crearPedido(@Args('dto') dto: PedidoDto): Pedido {
    return this.pedidoService.crearPedido(dto);
  }

  @ResolveField('productos', () => [Object])
  productos(@Parent() pedido: Pedido) {
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(__dirname, '../persistence/data.json');
    const raw = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(raw);
    // pedido.productos es un array de IDs, devolvemos los objetos Producto
    return (pedido as any).productos.map((pid: number) => {
      return data.productos.find((prod: any) => prod.id === pid);
    });
  }
}
