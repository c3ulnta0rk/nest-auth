import { Controller, Get, Session, UseGuards } from '@nestjs/common';
import * as secureSession from '@fastify/secure-session';
import { LocalGuard } from './modules/auth/guards/local/local.guard';
import { SessionGuard } from './modules/auth/guards/session/session.guard';

@Controller()
export class AppController {
  @Get()
  @UseGuards(LocalGuard)
  localAuth(@Session() session: secureSession.Session) {
    const user = session.get('user');
    return user;
  }

  @Get('restricted-page')
  @UseGuards(SessionGuard)
  sessionAuth() {
    return 'coucou';
  }

  @Get('logout')
  logout(@Session() session: secureSession.Session) {
    session.delete();
    return 'ok';
  }
}
