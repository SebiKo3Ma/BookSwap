import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Listing } from '../listing/listing.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_joined: Date;

  @OneToMany(() => Listing, (listing) => listing.user)
  listings: Listing[];

}
