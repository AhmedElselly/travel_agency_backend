import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan from 'morgan';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 8001;
  app.use(morgan('dev'));
  // app.use(cors());
  app.enableCors();
  await app.listen(PORT);
  console.log(`Server is on port ${PORT}`);
}
bootstrap();
