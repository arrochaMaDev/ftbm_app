import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserDB } from '../User/userDB';
import { BandaDB } from '../Banda/bandaDB';

@Entity({ name: 'usuario_banda' })
export class Usuario_bandaDB {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => UserDB)
  // @JoinColumn({ name: 'usuario_id' })
  // usuario: UserDB;

  // @ManyToOne(() => BandaDB)
  // @JoinColumn({ name: 'banda_id' })
  // bana: BandaDB;

  @CreateDateColumn({ type: 'timestamp' })
  fecha_alta: Date;

  @Column()
  es_musico: boolean;

  @Column()
  es_directivo: boolean;
}
