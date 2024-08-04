import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ShortenUrlDto } from './dto/create-url.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from './entities/url.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private urlRepository: Repository<Url>,
  ) {}
  async shorten(shortenUrlDto: ShortenUrlDto) {
    try {
      const res = await this.urlRepository.save(shortenUrlDto);
      return res;
    } catch (error) {
      console.log(error);
      return 'error';
    }
  }

  async redirect(id: string) {
    try {
      const url = await this.urlRepository.findOne({ where: { id } });
      if (url?.long_url) {
        return url.long_url;
      } else {
        throw new HttpException('Url not found', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
