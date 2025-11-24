
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProtocolsService } from './protocols.service';

@Controller('protocols')
export class ProtocolsController {
  constructor(private readonly service: ProtocolsService) {}

  @Get()
  async list() {
    return this.service.list();
  }

  @Post()
  async create(@Body() body: { title: string }) {
    return this.service.create(body.title);
  }

  @Post(':id/publish')
  async publish(@Param('id') id: string) {
    return this.service.publish(id);
  }
}

