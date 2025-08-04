export interface IPago {
  id: number;
  pedidoId: number;
  monto: number;
  metodo: string;
  confirmado: boolean;
}
