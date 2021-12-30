import { Injectable } from '@nestjs/common';
import { Model, Document } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

interface Cat extends Document {
  readonly name: string;
  readonly age: number;
  readonly disablity: boolean;
}

@Injectable()
export class CatsService {
  constructor(@InjectModel('CATS') private readonly cats: Model<Cat>) {}

  async findAll(): Promise<any> {
    const cats = await this.cats.find().exec();
    console.log(cats);
    return cats;
  }

  async createCat(cat: any): Promise<any> {
    const newCat = new this.cats(cat);
    return await newCat.save();
  }

  async updateCat(id: string, cat: any): Promise<any> {
    const updatedCat = await this.cats.findByIdAndUpdate(id, cat, {
      new: true,
    });
    return updatedCat;
  }

  async findOneCat(id: string): Promise<any> {
    const cat = await this.cats.findById(id).exec();
    return cat ? cat : { message: 'Cat not found' };
  }

  async deleteCat(id: string): Promise<any> {
    const cat = await this.cats.findByIdAndRemove(id);
    return cat;
  }
}
