import { InputType, Field, Int, PartialType, Float } from '@nestjs/graphql';
import { CreateUbicacionInput } from './create-ubicacion.input';

@InputType()
export class UpdateUbicacionInput extends PartialType(CreateUbicacionInput) {
  @Field(() => Int)
  id: number;
}