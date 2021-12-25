import { Injectable } from '@nestjs/common';
import { Model, Document } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// interface for the Dog document - should match the schema
interface Dog extends Document {
  readonly name: string;
  readonly age: number;
  readonly createdAt: Date;
}

@Injectable()
export class DogsService {
  constructor(
    //  below inject model has to match the name of the model in dogs_module & in the provider
    @InjectModel('DOG_MODEL') private readonly dogModel: Model<Dog>,
  ) {}

  async findAllDogs(): Promise<any> {
    const dogs = await this.dogModel.find().exec();
    return dogs;
  }

  async findOneDog(id: string): Promise<any> {
    const dog = await this.dogModel.findById(id).exec();
    return dog ? dog : { message: 'Dog not found' };
  }

  async create(dog: any): Promise<any> {
    const newDog = new this.dogModel(dog);
    return await newDog.save();
  }
}
