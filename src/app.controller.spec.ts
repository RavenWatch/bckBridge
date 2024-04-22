import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('test de equivalência entre numeros e seu output', () => {
    it('deve retornar 4 ao ser dado 10 como input', () => {
      expect(appController.getListaOfPrimoNumbers(10).numbers).toBe(4)
    });
    it('deve retornar 0 ao ser dado números menores que 2 ou que não sejam inteiros como input ', () => {
      expect(appController.getListaOfPrimoNumbers(1).numbers).toBe(-1)
      expect(appController.getListaOfPrimoNumbers(0).numbers).toBe(-1)
      expect(appController.getListaOfPrimoNumbers(-1).numbers).toBe(-1)
      expect(appController.getListaOfPrimoNumbers(3.7).numbers).toBe(-1)

    });
  });
});
