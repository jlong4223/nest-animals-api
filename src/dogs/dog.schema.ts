import * as mongoose from 'mongoose';

export const DogSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  {
    timestamps: true,
  },
);
