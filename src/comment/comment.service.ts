import { Prisma } from '@prisma/client';
import { DatabaseService } from './../database/database.service';
import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from 'src/dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createCommentDto: CreateCommentDto) {
    const { text, userId, videoId } = createCommentDto;
    console.log('createCommentDto', createCommentDto);
    return this.databaseService.comment.create({
      data: {
        text,
        user: {
          connect: { id: userId },
        },
        video: {
          connect: { id: videoId },
        },
      },
    });
  }

  findAll() {
    return this.databaseService.comment.findMany();
  }

  findOne(id: string) {
    return this.databaseService.comment.findUnique({
      where: { id },
    });
  }
}
