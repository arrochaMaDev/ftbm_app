import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserDB } from '../Usuario/userDB';
import { InstrumentoDB } from '../Instrumento/instrumentoDB';

@Entity({ name: 'usuario_instrumento' })
export class Usuario_instrumentoDB {
  @PrimaryGeneratedColumn()
  id: number;

  // Relación con Usuario
  @ManyToOne(() => UserDB, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: UserDB;

  // Relación con Instrumento
  @ManyToOne(() => InstrumentoDB, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'instrumento_id' })
  instrumento: InstrumentoDB;

  @Column()
  descripcion: string;
}
