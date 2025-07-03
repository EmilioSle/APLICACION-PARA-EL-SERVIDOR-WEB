import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateLecturaInput {
  @Field()
  @IsNotEmpty()
  fechaHora: Date;

  @Field(() => Float)
  @IsNumber()
  valor: number;

  @Field(() => Int)
  @IsNumber()
  sensorId: number; 
}
