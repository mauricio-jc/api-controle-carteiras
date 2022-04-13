import { Test, TestingModule } from '@nestjs/testing';
import { DevedoresService } from './devedores.service';

describe('DevedoresService', () => {
  let service: DevedoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevedoresService],
    }).compile();

    service = module.get<DevedoresService>(DevedoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
