import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ProductoService } from '../services/producto.service';
import { ProductoDto } from '../../../domain/dtos/producto.dto';
import { Producto } from '../../../domain/entities/producto.entity';
import { Categoria } from '../../../domain';
import * as data from '../persistence/data.json';

@Resolver(() => Producto)
export class ProductoResolver {
  private readonly productoService = new ProductoService();

  @Query(() => [Producto])
  obtenerProductos(): Producto[] {
    return this.productoService.obtenerProductos();
  }

  @Mutation(() => Producto)
  crearProducto(@Args('dto') dto: ProductoDto): Producto {
    return this.productoService.crearProducto(dto);
  }

  @ResolveField(() => Categoria, { nullable: true })
  categoria(@Parent() producto: Producto): Categoria | undefined {
    return (data as any).categorias.find((cat: Categoria) => cat.id === producto.categoriaId);
  }
}