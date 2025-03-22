import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'banda' })
export class BandaDB {
  @PrimaryGeneratedColumn()
  banda_id: number;

  @Column()
  nombre: string;

  @Column()
  cif: string;

  @Column()
  municipio: string;

  @Column()
  email: string;

  @Column()
  telefono: number;

  @Column()
  logo: string;

  @Column()
  director: string;

  @Column()
  informacion: string;

  @Column()
  es_activa: boolean;

  // Relación con usuario_banda (tabla intermedia)
  // @OneToMany(() => Usuario_bandaDB, (usuario_banda) => usuario_banda.banda)
  // usuarioBandas: Usuario_bandaDB[];
}
