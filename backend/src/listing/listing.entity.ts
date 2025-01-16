import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    JoinColumn,  // To explicitly define the column for the foreign key
  } from 'typeorm';
  import { User } from '../user/user.entity';  // Adjust the path to your User entity
  
  @Entity('listings')  // Table name
  export class Listing {
    @PrimaryGeneratedColumn()
    listing_id: number;
  
    @Column({ type: 'text', nullable: false })
    description: string;
  
    @Column({ type: 'varchar', length: 255, nullable: false })
    title: string;
  
    @Column({ type: 'varchar', length: 255, nullable: false })
    author: string;
  
    @Column({ type: 'varchar', length: 255, nullable: false })
    publisher: string;
  
    @Column()  // Add the userId column as a simple foreign key column
    userId: number;
  
    @ManyToOne(() => User, (user) => user.listings, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })  // Explicitly define the foreign key column name
    user: User;
  }
  