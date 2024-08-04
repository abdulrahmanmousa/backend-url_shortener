import { PartialType } from '@nestjs/mapped-types';
import { ShortenUrlDto } from './create-url.dto';

export class UpdateUrlDto extends PartialType(ShortenUrlDto) {}
