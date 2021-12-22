import {
  Controller,
  Get,
  Req,
  Res,
  Post,
  HttpCode,
  Header,
  Param,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { DogsService } from './dogs.service';
@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  @HttpCode(200)
  @Header('Cache-Control', 'no-cache')
  create(@Req() request: Request, @Res() response: Response): any {
    const dog = this.dogsService.create(request.body);

    return response.json({
      message: 'Created dog',
      dog,
    });
  }

  @Get(':id')
  findOne(@Param() params): any {
    const id = Number(params.id);
    return this.dogsService.findOneDog(id);
  }

  @Get()
  findAll(@Req() request: Request, @Res() response: Response): any {
    return response.json(this.dogsService.findAllDogs());
  }
}
