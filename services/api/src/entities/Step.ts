
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ProtocolVersion } from './ProtocolVersion';

@Entity()
export class Step {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => ProtocolVersion, { onDelete: 'CASCADE' })
  protocolVersion!: ProtocolVersion;

  @Column('int')
  step_order!: number;

  @Column({ type: 'jsonb', nullable: true })
  content?: any;

  @Column({ type: 'jsonb', nullable: true })
  params?: any;
}

