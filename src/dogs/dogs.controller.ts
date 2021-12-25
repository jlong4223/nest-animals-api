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
    this.dogsService.create({ ...request.body, createdAt: new Date() });

    return response.json({
      message: 'Created dog',
      dog: request.body,
    });
  }

  @Get(':id')
  findOne(@Param() params): any {
    const id = params.id;
    return this.dogsService.findOneDog(id);
  }

  @Get()
  async findAll(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    const dogs = await this.dogsService.findAllDogs();
    return response.json(dogs);
  }
}
