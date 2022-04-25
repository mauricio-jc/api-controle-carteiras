import { Test, TestingModule } from '@nestjs/testing';
import { ClientesDevedoresController } from './clientes-devedores.controller';

describe('ClientesDevedoresController', () => {
  let controller: ClientesDevedoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientesDevedoresController],
    }).compile();

    controller = module.get<ClientesDevedoresController>(ClientesDevedoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
