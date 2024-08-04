import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { UrlService } from './url.service';
import { ShortenUrlDto } from './dto/create-url.dto';
import { Response } from 'express';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shorten')
  create(@Body() shortenUrlDto: ShortenUrlDto) {
    console.log(shortenUrlDto, 'rec');
    return this.urlService.shorten(shortenUrlDto);
  }

  @Get('redirect/:id')
  async findAll(@Param() { id }: { id: string }, @Res() res: Response) {
    try {
      let url = await this.urlService.redirect(id);
      if (!url.startsWith('http')) {
        url = `https://${url}`;
      }
      if (url) res.redirect(url);
    } catch (error) {
      throw error;
    }
  }
}
