import { Test, TestingModule } from '@nestjs/testing';
import { LecturaResolver } from './lectura.resolver';
import { LecturaService } from './lectura.service';

describe('LecturaResolver', () => {
  let resolver: LecturaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LecturaResolver, LecturaService],
    }).compile();

    resolver = module.get<LecturaResolver>(LecturaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
