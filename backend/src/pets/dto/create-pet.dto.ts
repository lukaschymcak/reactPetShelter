import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsUrl,
  IsOptional,
  Min,
} from 'class-validator';

export class CreatePetDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsOptional()
  breed?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  age?: number;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
