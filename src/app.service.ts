import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      message: 'Hello World!',
      timestamp: new Date(),
      apiName: 'NestJS - Cats & Dogs',
    };
  }
}
