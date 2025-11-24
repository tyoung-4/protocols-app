
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Protocol } from '../entities/Protocol';
import { ProtocolVersion } from '../entities/ProtocolVersion';

@Injectable()
export class ProtocolsService {
  constructor(
    @InjectRepository(Protocol) private readonly protocolRepo: Repository<Protocol>,
    @InjectRepository(ProtocolVersion) private readonly versionRepo: Repository<ProtocolVersion>,
  ) {}

  async list() {
    return this.protocolRepo.find({ order: { updated_at: 'DESC' } });
  }

  async create(title: string) {
    const protocol = this.protocolRepo.create({ title, current_version: 0 });
    return this.protocolRepo.save(protocol);
  }

  async publish(protocolId: string) {
    const protocol = await this.protocolRepo.findOne({ where: { id: protocolId } });
    if (!protocol) throw new Error('Protocol not found');
    const nextVersion = (protocol.current_version || 0) + 1;
    const version = this.versionRepo.create({ protocol, version: nextVersion });
    await this.versionRepo.save(version);
    protocol.current_version = nextVersion;
    await this.protocolRepo.save(protocol);
    return { protocolId, version: nextVersion };
  }
}

