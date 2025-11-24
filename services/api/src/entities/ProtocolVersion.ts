
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Protocol } from './Protocol';

@Entity()
export class ProtocolVersion {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Protocol, (p) => p.versions, { onDelete: 'CASCADE' })
  protocol!: Protocol;

  @Column('int')
  version!: number;

  @Column({ type: 'jsonb', nullable: true })
  document?: any;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

