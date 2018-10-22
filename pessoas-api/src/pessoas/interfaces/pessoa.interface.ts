import { Document } from 'mongoose';

export interface Pessoa extends Document {
  readonly name: string;
  readonly age: number;
  readonly birthday: string;
}