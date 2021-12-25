import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { DatabaseModule } from 'src/database/database.module';
import { dogProviders } from './dogs.providers';
import { MongooseModule } from '@nestjs/mongoose';
import { DogSchema } from './dog.schema';

@Module({
  imports: [
    DatabaseModule,
    // need to identify the model name and the schema here
    MongooseModule.forFeature([{ name: 'DOG_MODEL', schema: DogSchema }]),
  ],
  // can remove the below from app module since this module is imported there
  controllers: [DogsController],
  providers: [DogsService, ...dogProviders],
})
export class DogsModule {}
