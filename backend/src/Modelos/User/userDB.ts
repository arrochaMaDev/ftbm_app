import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum TipoUsuario {
  MUSICO = 'musico',
  DIRECTIVO = 'directivo',
  MUSICO_DIRECTIVO = 'musico_directivo',
}

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
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  fecha_registro: Date;

  @Column()
  es_admin: boolean;

  @Column({ type: 'enum' })
  tipo_usuario: TipoUsuario;

  @Column()
  numero_federado: number;

  @Column()
  activo_musico: boolean;

  @Column()
  activo_directivo: boolean;

  @Column()
  acepta_bolsa_refuerzos: boolean;

  @Column()
  acepta_bolsa_profesores: boolean;

  @Column()
  cepta_bolsa_banda_insular: string;

  @Column()
  acepta_comunicaciones_email: string;

  // FALTAN LAS RELACIONES
}
