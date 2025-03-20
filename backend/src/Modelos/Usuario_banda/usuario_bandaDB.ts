import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

import { UserDB } from '../Usuario/userDB';
import { BandaDB } from '../Banda/bandaDB';

@Entity({ name: 'usuario_banda' })
@Unique(['usuario', 'banda']) // Evita que un usuario esté dos veces en la misma banda
export class Usuario_bandaDB {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserDB, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: UserDB;

  @ManyToOne(() => BandaDB, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'banda_id' })
  banda: BandaDB;

  @CreateDateColumn({ type: 'timestamp' })
  fecha_alta: Date;

  @Column()
  es_musico: boolean;

  @Column()
  es_directivo: boolean;
}
