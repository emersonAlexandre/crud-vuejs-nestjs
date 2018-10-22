import * as mongoose from 'mongoose';

export const PessoaSchema = new mongoose.Schema({
  name: String,
  age: Number,
  birthday: String,
});