import { Test, TestingModule } from '@nestjs/testing';
import { DevedoresController } from './devedores.controller';

describe('DevedoresController', () => {
  let controller: DevedoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevedoresController],
    }).compile();

    controller = module.get<DevedoresController>(DevedoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
