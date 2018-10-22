import { Module } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { PessoasController } from './pessoas.controller';
import { DatabaseModule } from '../database/database.module';
import { pessoasProviders } from './pessoas.providers';

@Module({
  imports: [DatabaseModule],
  providers: [PessoasService, ...pessoasProviders],
  controllers: [PessoasController],
})
export class PessoasModule {}
