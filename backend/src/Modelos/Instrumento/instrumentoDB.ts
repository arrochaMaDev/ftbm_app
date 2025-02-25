import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Usuario_instrumentoDB } from '../Usuario_instrumento/usuario_instrumentoDB';

@Entity({ name: 'instrumento' })
export class InstrumentoDB {
  @PrimaryGeneratedColumn()
  instrumento_id: number;

  @Column()
  nombre: string;

  // Relación con usuario_instrumento (tabla intermedia)
  // @OneToMany(
  //   () => Usuario_instrumentoDB,
  //   (usuario_instrumento: Usuario_instrumentoDB) => usuario_instrumento.id,
  // )
  // usuario_instrumento: Usuario_instrumentoDB[];
  @OneToMany(
    () => Usuario_instrumentoDB,
    (usuario_instrumento) => usuario_instrumento.instrumento,
  )
  usuario_instrumento: Usuario_instrumentoDB[];
}
