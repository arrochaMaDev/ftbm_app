import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'banda' })
export class BandaDB {
  @PrimaryGeneratedColumn()
  banda_id: number;

  @Column()
  nombre: string;

  // FALTAN LAS RELACIONES
}
