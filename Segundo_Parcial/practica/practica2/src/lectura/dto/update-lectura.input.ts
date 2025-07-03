import { InputType, Field, Int, PartialType, Float } from '@nestjs/graphql';
import { CreateLecturaInput } from './create-lectura.input';

@InputType()
export class UpdateLecturaInput extends PartialType(CreateLecturaInput) {
  @Field(() => Int)
  id: number;
}