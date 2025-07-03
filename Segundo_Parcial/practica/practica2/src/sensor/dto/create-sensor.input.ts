import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsBoolean, IsOptional, IsInt } from 'class-validator';

@InputType()
export class CreateSensorInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  tipo: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @Field(() => Int)
  @IsInt()
  ubicacionId: number;

  @Field({ defaultValue: true })
  @IsBoolean()
  @IsOptional()
  activo?: boolean;
}
