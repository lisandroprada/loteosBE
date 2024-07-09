import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Lote } from './schemas/lotes.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class LotesService {
  constructor(
    @InjectModel(Lote.name)
    private loteModel: mongoose.Model<Lote>,
  ) {}

  async create(createLoteDto: CreateLoteDto): Promise<Lote> {
    console.log(createLoteDto);
    const lote = this.loteModel.create(createLoteDto);
    return lote;
  }

  async findAll(): Promise<Lote[]> {
    const lotes = await this.loteModel.find();
    return lotes;
  }

  async findOne(id: string): Promise<Lote> {
    const lote = await this.loteModel.findById(id);
    if (!lote) {
      throw new NotFoundException('Lote not found');
    }
    return lote;
  }

  update(id: string, updateLoteDto: UpdateLoteDto) {
    console.log(id, updateLoteDto);
    const lote = this.loteModel.findByIdAndUpdate(id, updateLoteDto, {
      new: true,
      runValidators: true,
    });
    return lote;
  }

  remove(id: number) {
    return `This action removes a #${id} lote`;
  }
}
