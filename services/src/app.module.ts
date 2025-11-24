
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Protocol } from './entities/Protocol';
import { ProtocolVersion } from './entities/ProtocolVersion';
import { Step } from './entities/Step';
import { Experiment } from './entities/Experiment';
import { ProtocolsController } from './protocols/protocols.controller';
import { ProtocolsService } from './protocols/protocols.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
      username: process.env.POSTGRES_USER || 'eln',
      password: process.env.POSTGRES_PASSWORD || 'elnpass',
      database: process.env.POSTGRES_DB || 'eln',
      synchronize: true,
      entities: [Protocol, ProtocolVersion, Step, Experiment],
    }),
    TypeOrmModule.forFeature([Protocol, ProtocolVersion, Step, Experiment]),
  ],
  controllers: [ProtocolsController],
  providers: [ProtocolsService],
})
export class AppModule {}

