import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
  } from 'typeorm';
  import { User } from '../user/user.entity'; // Adjust the path to your User entity
  
  @Entity('listings') // Table name
  export class Listing {
    @PrimaryGeneratedColumn()
    listing_id: number;
  
    @CreateDateColumn({ type: 'timestamp' })
    listing_timestamp: Date;
  
    @Column({ type: 'text', nullable: false })
    description: string;
  
    @Column({ type: 'varchar', length: 255, nullable: false })
    title: string;
  
    @Column({ type: 'varchar', length: 255, nullable: false })
    author: string;
  
    @Column({ type: 'varchar', length: 255, nullable: false })
    publisher: string;
  
    @ManyToOne(() => User, (user) => user.listings, { nullable: false, onDelete: 'CASCADE' })
    user: User;
  }
  