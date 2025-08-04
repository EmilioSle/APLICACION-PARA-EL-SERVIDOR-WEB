import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriaService } from '../services/categoria.service';
import { Categoria, CategoriaDto } from '../../../domain';

@Resolver(() => Categoria)
export class CategoriaResolver {
  private readonly categoriaService = new CategoriaService();

  @Query(() => [Categoria])
  obtenerCategorias(): Categoria[] {
    return this.categoriaService.obtenerCategorias();
  }

  @Mutation(() => Categoria)
  crearCategoria(@Args('dto') dto: CategoriaDto): Categoria {
    return this.categoriaService.crearCategoria(dto);
  }
}
