import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats = [
    {
      id: 1,
      name: 'Cat1',
    },
    {
      id: 2,
      name: 'Cat2',
    },
  ];

  findAll(): any {
    return this.cats;
  }
}
