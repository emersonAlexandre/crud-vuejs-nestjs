import { Connection } from 'mongoose';
import { PessoaSchema } from './schemas/pessoa.schema';

export const pessoasProviders = [
  {
    provide: 'PessoaModelToken',
    useFactory: (connection: Connection) => connection.model('Pessoa', PessoaSchema),
    inject: ['DbConnectionToken'],
  },
];