import { Controller, Get, Session, UseGuards } from '@nestjs/common';
import * as secureSession from '@fastify/secure-session';
import { LocalGuard } from './modules/auth/guards/local/local.guard';
import { Public } from './modules/auth/contants';

@Controller()
export class AppController {
  @Get()
  @Public()
  @UseGuards(LocalGuard)
  localAuth(@Session() session: secureSession.Session) {
    const user = session.get('user');
    return user;
  }

  @Get('restricted-page')
  sessionAuth() {
    return 'coucou';
  }

  @Get('logout')
  @Public()
  logout(@Session() session: secureSession.Session) {
    session.delete();
    return 'ok';
  }
}
