import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserDB } from '../User/userDB';
import { InstrumentoDB } from '../Instrumento/instrumentoDB';

@Entity({ name: 'usuario_instrumento' })
export class Usuario_instrumentoDB {
  @PrimaryGeneratedColumn()
  id: number;

  // Relación con Usuario
  @ManyToOne(() => UserDB, (usuario) => usuario.usuario_instrumento)
  @JoinColumn({ name: 'usuario_id' })
  usuario: UserDB;

  // Relación con Instrumento
  @ManyToOne(
    () => InstrumentoDB,
    (instrumento) => instrumento.usuario_instrumento,
  )
  @JoinColumn({ name: 'instrumento_id' })
  instrumento: InstrumentoDB;

  @Column()
  descripcion: string;
}
