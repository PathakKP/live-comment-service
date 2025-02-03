import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class VideoService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createVideDto: Prisma.VideoCreateInput) {
    return this.databaseService.video.create({
      data: createVideDto,
    });
  }

  findAll() {
    return this.databaseService.video.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.video.findUnique({
      where: { id },
    });
  }
}
