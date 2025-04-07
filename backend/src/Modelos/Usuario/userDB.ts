import {
  Column,
  CreateDateColumn,
  Entity,
  // OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import { Usuario_bandaDB } from '../Usuario_banda/usuario_bandaDB';
// import { Usuario_instrumentoDB } from '../Usuario_instrumento/usuario_instrumentoDB';

// export enum TipoUsuario {
//   MUSICO = 'musico',
//   DIRECTIVO = 'directivo',
//   MUSICO_DIRECTIVO = 'musico_directivo',
// }

@Entity({ name: 'usuario' })
export class UserDB {
  @PrimaryGeneratedColumn()
  usuario_id: number;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  dni: string;

  @Column()
  foto_dni: string;

  @CreateDateColumn({ type: 'date' })
  fecha_nacimiento: Date;

  @Column()
  nombre_tutor: string;

  @Column()
  apellidos_tutor: string;

  @Column()
  parentesco: string;

  @Column()
  dni_tutor: string;

  @Column()
  foto_dni_tutor: string;

  @Column()
  direccion: string;

  @Column()
  telefono: number;

  @Column()
  foto: string;

  @Column()
  numero_federado: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  fecha_registro: Date; //se genera automáticamente

  @Column()
  es_admin: boolean;

  // @Column({ type: 'enum' })
  // tipo_usuario: TipoUsuario;

  @Column()
  es_activo: boolean;

  // @Column()
  // activo_musico: boolean;

  // @Column()
  // activo_directivo: boolean;

  // @Column()
  // acepta_bolsa_refuerzos: boolean;
  //TODO TRASLADAR A USUARIO_INSTRUMENTO

  // @Column()
  // acepta_bolsa_profesores: boolean;
  //TODO TRASLADAR A USUARIO_INSTRUMENTO

  // @Column()
  // acepta_bolsa_banda_insular: boolean;
  //TODO TRASLADAR A USUARIO_INSTRUMENTO

  @Column()
  acepta_comunicaciones_email: boolean;

  // Relación con usuario_instrumento (tabla intermedia)
  // @OneToMany(
  //   () => Usuario_instrumentoDB,
  //   (usuario_instrumento: Usuario_instrumentoDB) => usuario_instrumento.id,
  // )
  // usuario_instrumento: Usuario_instrumentoDB[];

  // @OneToMany(
  //   () => Usuario_instrumentoDB,
  //   (usuario_instrumento) => usuario_instrumento.usuario,
  // )
  // usuario_instrumento: Usuario_instrumentoDB[];

  // Relación con usuario_banda (tabla intermedia)
  // @OneToMany(() => Usuario_bandaDB, (usuario_banda) => usuario_banda.usuario)
  // usuarioBandas: Usuario_bandaDB[];
}
