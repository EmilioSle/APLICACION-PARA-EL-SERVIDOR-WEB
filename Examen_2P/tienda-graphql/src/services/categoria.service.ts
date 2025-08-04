import { Categoria, CategoriaDto } from '../../../domain';

export class CategoriaService {
  crearCategoria(dto: CategoriaDto): Categoria {
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(__dirname, '../persistence/data.json');
    const raw = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(raw);
    // Crear la categoría y agregarla al JSON
    const nueva: Categoria = {
      id: data.categorias.length + 1,
      ...dto
    };
    data.categorias.push(nueva);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return nueva;
  }

  obtenerCategorias(): Categoria[] {
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(__dirname, '../persistence/data.json');
    const raw = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(raw);
    return data.categorias;
  }
}
