import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Lote {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  type: string;

  @Prop()
  d?: string;

  @Prop()
  x?: number;

  @Prop()
  y?: number;

  @Prop()
  width?: number;

  @Prop()
  height?: number;

  @Prop({ required: true })
  cx: number;

  @Prop({ required: true })
  cy: number;

  @Prop({ required: true })
  text: string;
}

export const LoteSchema = SchemaFactory.createForClass(Lote);
