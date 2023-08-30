import { Test, TestingModule } from '@nestjs/testing';
import { CarResolver } from './car.resolver';

describe('CarResolver', () => {
  let resolver: CarResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarResolver],
    }).compile();

    resolver = module.get<CarResolver>(CarResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
