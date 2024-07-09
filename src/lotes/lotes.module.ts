import { Module } from '@nestjs/common';
import { LotesService } from './lotes.service';
import { LotesController } from './lotes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LoteSchema } from './schemas/lotes.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Lote', schema: LoteSchema }])],
  controllers: [LotesController],
  providers: [LotesService],
})
export class LotesModule {}
