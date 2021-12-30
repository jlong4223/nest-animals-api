import { Connection } from 'mongoose';
import { CatSchema } from './cats.schema';

export const catsProviders = [
  {
    provide: 'CATS',
    useFactory: (connection: Connection) => connection.model('Cat', CatSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
