
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors({ origin: true }); // NestJS built-in CORS
    const port = process.env.API_PORT || 3001;
    await app.listen(port);
    console.log(`✅ API listening on http://localhost:${port}`);
  } catch (error) {
    console.error('❌ Failed to start API:', error);
  }
}

