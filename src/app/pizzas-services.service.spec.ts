import { TestBed } from '@angular/core/testing';

import { PizzasServicesService } from './pizzas-services.service';

describe('PizzasServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzasServicesService = TestBed.get(PizzasServicesService);
    expect(service).toBeTruthy();
  });
});
