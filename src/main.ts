import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin:["http://localhost:3000","fb-bridge-8jq7ex3bx-julio-raposos-projects.vercel.app"]})
  await app.listen(8000);
}
bootstrap();
