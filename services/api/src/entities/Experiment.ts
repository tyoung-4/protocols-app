
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { ProtocolVersion } from './ProtocolVersion';

@Entity()
export class Experiment {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => ProtocolVersion, { onDelete: 'SET NULL' })
  protocolVersion!: ProtocolVersion;

  @Column({ type: 'jsonb', nullable: true })
  state?: any;

  @CreateDateColumn()
  created_at!: Date;
}

