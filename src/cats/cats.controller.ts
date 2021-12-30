import {
  Controller,
  Get,
  Patch,
  Post,
  Req,
  Res,
  Param,
  Delete,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    const cats = await this.catsService.findAll();
    return response.json(cats);
  }

  @Post()
  async create(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    const cat = await this.catsService.createCat(request.body);
    return response.json(cat);
  }

  @Patch(':id')
  async update(
    @Param() params,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    const id = params.id;
    const cat = await this.catsService.updateCat(id, request.body);
    return response.json(cat);
  }

  @Get(':id')
  async findOne(@Param() params): Promise<any> {
    const id = params.id;
    const cat = await this.catsService.findOneCat(id);
    return cat;
  }

  @Delete(':id')
  async delete(@Param() params): Promise<any> {
    const id = params.id;
    const cat = await this.catsService.deleteCat(id);
    return cat;
  }
}
