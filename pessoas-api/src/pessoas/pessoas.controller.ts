import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { PessoasService } from './pessoas.service';
import { Pessoa } from './interfaces/pessoa.interface';

@Controller('pessoas')
export class PessoasController {
  constructor(private readonly pessoasService: PessoasService) {}

  @Post()
  async create(@Body() createPessoaDto: CreatePessoaDto) {
    this.pessoasService.create(createPessoaDto);
  }

  @Get()
  async findAll(): Promise<Pessoa[]> {
    return this.pessoasService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id) {
    return this.pessoasService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id, @Body() updatePessoaDto) {
    return this.pessoasService.update(id, updatePessoaDto);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.pessoasService.delete(id);
  }
}