import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const isOnProduction=true
  const allowedClient= isOnProduction? "https://fb-bridge.vercel.app" : "http://localhost:3000"
  app.enableCors({origin:[allowedClient]})
  await app.listen(8000);
}
bootstrap();
