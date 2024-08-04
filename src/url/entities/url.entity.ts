import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity()
export class Url {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  long_url: string;
}
