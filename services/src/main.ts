
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({ origin: true }));
  const port = process.env.API_PORT || 3001;
  await app.listen(port);
  console.log(`API listening on ${port}`);
}
bootstrap();

