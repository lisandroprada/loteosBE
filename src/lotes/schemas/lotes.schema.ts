import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Estado {
  VENDIDO = 'Vendido',
  DISPONIBLE = 'Disponible',
  RESERVADO = 'Reservado',
}

@Schema({
  timestamps: true,
})
export class Lote {
  @Prop({ required: true })
  manzana: string;

  @Prop({ required: true })
  parcela: string;

  //   @Prop({ required: true })
  //   nomenclaturaReal: string;

  //   @Prop({ required: true })
  //   medidas: string;

  //   @Prop({ required: true })
  //   superficie: number;

  //   @Prop({ required: true })
  //   uso: string;
  @Prop({ required: true })
  valores: number;
  //   @Prop({ required: true })
  //   honorarios: number;

  //   @Prop({ required: true })
  //   anticipo: number;

  //   @Prop({ required: true })
  //   cuotas: number;

  //   @Prop({ required: true })
  //   esquina: boolean;

  //   @Prop({ required: true })
  //   observaciones: string;

  //   @Prop({ required: true })
  //   propietario: string;

  //   @Prop({ required: true })
  //   fechaAlta: Date;

  //   @Prop({ required: true })
  //   fechaBaja: Date;

  @Prop({ required: true })
  estado: Estado;
}

export const LoteSchema = SchemaFactory.createForClass(Lote);
