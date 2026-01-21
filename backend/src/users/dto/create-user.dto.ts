import {
  IsEmail,
  IsString,
  IsOptional,
  IsDate,
  IsUrl,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  name: string;

  @IsDate()
  @Type(() => Date)
  updated_at?: Date;

  @IsString()
  role: string;

  @IsOptional()
  avatar_url?: string;
}
