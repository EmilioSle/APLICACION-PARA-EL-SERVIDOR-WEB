import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PagoService } from '../services/pago.service';
import { Pago, PagoDto } from '../../../domain';

@Resolver(() => Pago)
export class PagoResolver {
  private readonly pagoService = new PagoService();

  @Query(() => [Pago])
  obtenerPagos(): Pago[] {
    return this.pagoService.obtenerPagos();
  }

  @Mutation(() => Pago)
  crearPago(@Args('dto') dto: PagoDto): Pago {
    return this.pagoService.crearPago(dto);
  }
}
