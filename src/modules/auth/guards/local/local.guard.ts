import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FastifyRequest } from 'fastify';

const user = {
  username: 'toto',
  age: 34,
};

@Injectable()
export class LocalGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const session = context.switchToHttp().getRequest<FastifyRequest>().session;
    session.set('user', user);
    return true;
  }
}
