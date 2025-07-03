import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateSensorInput } from './create-sensor.input';

@InputType()
export class UpdateSensorInput extends PartialType(CreateSensorInput) {
  @Field(() => Int)
  id: number;
}
