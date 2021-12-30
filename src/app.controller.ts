import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request, @Res() response: Response): any {
    const helloMessage = this.appService.getHello();
    return response.json(helloMessage);
  }
}
