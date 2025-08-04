import { Categoria, CategoriaDto } from '../../../domain';

export class CategoriaService {
  private categorias: Categoria[] = [];

  crearCategoria(dto: CategoriaDto): Categoria {
    const nueva: Categoria = {
      id: this.categorias.length + 1,
      ...dto
    };
    this.categorias.push(nueva);
    return nueva;
  }

  obtenerCategorias(): Categoria[] {
    return this.categorias;
  }
}
