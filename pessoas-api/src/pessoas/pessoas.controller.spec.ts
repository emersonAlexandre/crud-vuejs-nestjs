import { Test, TestingModule } from '@nestjs/testing';
import { PessoasController } from './pessoas.controller';

describe('Pessoas Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PessoasController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: PessoasController = module.get<PessoasController>(PessoasController);
    expect(controller).toBeDefined();
  });
});
