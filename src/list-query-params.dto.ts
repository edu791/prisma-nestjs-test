import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class ListQueryDto {
  @IsString()
  @IsOptional()
  sort: string;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => +value)
  limit: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => +value)
  page: number;
}
