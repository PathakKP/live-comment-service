import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [DatabaseModule, UserModule, VideoModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
