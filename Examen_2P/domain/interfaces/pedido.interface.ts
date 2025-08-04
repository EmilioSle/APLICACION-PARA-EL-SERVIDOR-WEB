export interface IPedido {
  id: number;
  productos: number[];
  categoriaId: number;
  total: number;
  estado: string;
}
