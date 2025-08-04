import { Categoria } from '../entities/categoria.entity';
import { CategoriaDto } from '../dtos/categoria.dto';

export class CategoriaService {
  crearCategoria(dto: CategoriaDto, categorias: Categoria[]): Categoria {
    const nueva: Categoria = {
      id: categorias.length + 1,
      ...dto
    };
    categorias.push(nueva);
    return nueva;
  }

  obtenerCategorias(categorias: Categoria[]): Categoria[] {
    return categorias;
  }
}
