import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  cedula: string;

  @Column()
  nombre: string;

  @Column()
  apellido1: string;

  @Column()
  apellido2: string;

  @Column('date')
  fechaNacimiento: Date;

  @Column()
    genero: string;

  @Column()
  estado: boolean;
}