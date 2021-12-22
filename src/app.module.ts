import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { DogsService } from './dogs/dogs.service';
@Module({
  imports: [],
  controllers: [AppController, DogsController, CatsController],
  providers: [AppService, CatsService, DogsService],
})
export class AppModule {}
