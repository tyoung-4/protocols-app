
// services/api/src/entities/Protocol.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProtocolVersion } from './ProtocolVersion';

@Entity()
export class Protocol {
  /** Database-generated UUID */
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  /** Human-readable title of the protocol (required) */
  @Column({ type: 'text' })
  title!: string;

  /** Optional longer description */
  @Column({ type: 'text', nullable: true })
  description?: string;

  /** Optional structured metadata (tags, domain, organism, etc.) */
  @Column({ type: 'jsonb', nullable: true })
  metadata?: any;

  /**
   * Tracks the latest published version number.
   * Starts at 0 until you publish the first version.
   */
  @Column({ type: 'int', default: 0 })
  current_version!: number;

  /** Optional owner/author (UUID of user) */
  @Column({ type: 'uuid', nullable: true })
  owner_id?: string;

  /** Timestamps (managed by TypeORM) */
  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  /** All versions for this protocol */
  @OneToMany(() => ProtocolVersion, (pv) => pv.protocol)
  versions!: ProtocolVersion[];
}

