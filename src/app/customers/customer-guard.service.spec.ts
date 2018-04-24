import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomerGuardService } from './customer-guard.service';

describe('CustomerGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [CustomerGuardService]
    });
  });

  it('should be created', inject([CustomerGuardService], (service: CustomerGuardService) => {
    expect(service).toBeTruthy();
  }));
});
