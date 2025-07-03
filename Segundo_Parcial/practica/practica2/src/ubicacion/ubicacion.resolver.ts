import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UbicacionService } from './ubicacion.service';
import { Ubicacion } from './entities/ubicacion.entity';
import { CreateUbicacionInput } from './dto/create-ubicacion.input';
import { UpdateUbicacionInput } from './dto/update-ubicacion.input';

@Resolver(() => Ubicacion)
export class UbicacionResolver {
  constructor(private readonly ubicacionService: UbicacionService) {}

  @Mutation(() => Ubicacion)
  createUbicacion(@Args('createUbicacionInput') createUbicacionInput: CreateUbicacionInput) {
    return this.ubicacionService.create(createUbicacionInput);
  }

  @Query(() => [Ubicacion], { name: 'ubicaciones' })
  findAll() {
    return this.ubicacionService.findAll();
  }

  @Query(() => Ubicacion, { name: 'ubicacion' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ubicacionService.findOne(id);
  }

  @Mutation(() => Ubicacion)
  updateUbicacion(@Args('updateUbicacionInput') updateUbicacionInput: UpdateUbicacionInput) {
    return this.ubicacionService.update(updateUbicacionInput.id, updateUbicacionInput);
  }

  @Mutation(() => Boolean)
  removeUbicacion(@Args('id', { type: () => Int }) id: number) {
    return this.ubicacionService.remove(id);
  }
}
