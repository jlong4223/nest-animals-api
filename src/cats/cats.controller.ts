import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(@Req() request: Request, @Res() response: Response): any {
    return response.json(this.catsService.findAll());
  }
}
