import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FastifyRequest } from 'fastify';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../../contants';

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const session = context.switchToHttp().getRequest<FastifyRequest>().session;
    const userExist = session.get('user');
    return Boolean(userExist);
  }
}
