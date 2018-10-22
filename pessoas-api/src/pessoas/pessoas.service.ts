import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Pessoa } from './interfaces/pessoa.interface';
import { CreatePessoaDto } from './dto/create-pessoa.dto';

@Injectable()
export class PessoasService {
  constructor(@Inject('PessoaModelToken') private readonly pessoaModel: Model<Pessoa>) {}

  async create(createPessoaDto: CreatePessoaDto): Promise<Pessoa> {
    const createdPessoa = new this.pessoaModel(createPessoaDto);
    return await createdPessoa.save();
  }

  async findAll(): Promise<Pessoa[]> {
    return await this.pessoaModel.find().exec();
  }

  async findById(id: string): Promise<Pessoa> {
    return await this.pessoaModel.findById(id).exec();
  }

  async update(id: string, updatePessoaDto: Pessoa): Promise<Pessoa> {
    return await this.pessoaModel.findByIdAndUpdate(id, updatePessoaDto).exec();
  }

  async delete(id): Promise<Pessoa> {
    return await this.pessoaModel.findByIdAndDelete(id).exec();
  }
}