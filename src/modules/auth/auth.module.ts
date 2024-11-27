import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';

@Module({
  controllers: [AppController, AuthController],
  providers: [AuthService],
})
export class AuthModule {}
