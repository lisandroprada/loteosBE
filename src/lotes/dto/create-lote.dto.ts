import {
  // IsEnum,
  // IsNotEmpty,
  IsNumber,
  IsOptional,
  // IsPositive,
  IsString,
} from 'class-validator';
// import { Estado } from '../schemas/lotes.schema';

export class CreateLoteDto {
  @IsString()
  id: string;

  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  d?: string;

  @IsOptional()
  @IsNumber()
  x?: number;

  @IsOptional()
  @IsNumber()
  y?: number;

  @IsOptional()
  @IsNumber()
  width?: number;

  @IsOptional()
  @IsNumber()
  height?: number;

  @IsNumber()
  cx: number;

  @IsNumber()
  cy: number;

  @IsString()
  text: string;
}
