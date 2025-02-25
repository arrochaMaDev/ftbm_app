import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario_instrumentoDB } from '../Usuario_instrumento/usuario_instrumentoDB';

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
  activo_musico: boolean;

  @Column()
  activo_directivo: boolean;

  @Column()
  acepta_bolsa_refuerzos: boolean;

  @Column()
  acepta_bolsa_profesores: boolean;

  @Column()
  acepta_bolsa_banda_insular: boolean;

  @Column()
  acepta_comunicaciones_email: boolean;

  // Relación con usuario_instrumento (tabla intermedia)
  @OneToMany(
    () => Usuario_instrumentoDB,
    (usuario_instrumento: Usuario_instrumentoDB) => usuario_instrumento.id,
  )
  usuario_instrumento: Usuario_instrumentoDB[];
}
