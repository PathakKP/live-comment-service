import { Prisma } from '@prisma/client';
import { VideoService } from './video.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  create(@Body() createVideoDto: Prisma.VideoCreateInput) {
    return this.videoService.create(createVideoDto);
  }

  @Get()
  findAll() {
    return this.videoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoService.findOne(id);
  }
}
