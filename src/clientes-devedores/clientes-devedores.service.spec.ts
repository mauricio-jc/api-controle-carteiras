import { Test, TestingModule } from '@nestjs/testing';
import { ClientesDevedoresService } from './clientes-devedores.service';

describe('ClientesDevedoresService', () => {
  let service: ClientesDevedoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientesDevedoresService],
    }).compile();

    service = module.get<ClientesDevedoresService>(ClientesDevedoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
