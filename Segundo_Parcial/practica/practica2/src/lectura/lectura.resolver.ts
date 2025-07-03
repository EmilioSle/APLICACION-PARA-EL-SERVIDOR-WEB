import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LecturaService } from './lectura.service';
import { Lectura } from './entities/lectura.entity';
import { CreateLecturaInput } from './dto/create-lectura.input';
import { UpdateLecturaInput } from './dto/update-lectura.input';

@Resolver(() => Lectura)
export class LecturaResolver {
  constructor(private readonly lecturaService: LecturaService) {}

  @Mutation(() => Lectura)
  createLectura(@Args('createLecturaInput') createLecturaInput: CreateLecturaInput) {
    return this.lecturaService.create(createLecturaInput);
  }

  @Query(() => [Lectura], { name: 'lecturas' })
  findAll() {
    return this.lecturaService.findAll();
  }

  @Query(() => Lectura, { name: 'lectura' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.lecturaService.findOne(id);
  }

  @Mutation(() => Lectura)
  updateLectura(@Args('updateLecturaInput') updateLecturaInput: UpdateLecturaInput) {
    return this.lecturaService.update(updateLecturaInput.id, updateLecturaInput);
  }

  @Mutation(() => Boolean)
  removeLectura(@Args('id', { type: () => Int }) id: number) {
    return this.lecturaService.remove(id);
  }
}
