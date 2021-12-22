import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  private readonly dogs = [
    {
      id: 1,
      name: 'Dog1',
    },
    {
      id: 2,
      name: 'Dog2',
    },
  ];

  findAllDogs(): any {
    return this.dogs;
  }

  findOneDog(id: number): any {
    const dog = this.dogs.find((dog) => dog.id === id);
    return dog;
  }

  create(dog: any): any {
    return this.dogs.push(dog);
  }
}
