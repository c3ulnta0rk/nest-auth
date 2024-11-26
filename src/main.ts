import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import secureSession from '@fastify/secure-session';
import { Logger } from '@nestjs/common';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  await app.register(secureSession, {
    secret: 'averylogphrasebiggerthanthirtytwochars',
    salt: 'mq9hDxBVDbspDR6n',
  });

  const staticFilePath = join(__dirname, '..', 'public');
  app.useStaticAssets({
    root: staticFilePath,
    prefix: '/public/',
  });
  Logger.log(`App serve the files from the path ${staticFilePath}`);

  await app.listen(process.env.PORT ?? 3000);
  Logger.log('App listening : http://localhost:3000');
}
bootstrap();
