import { TestBed, inject } from '@angular/core/testing';

import { FormTransferService } from './form-transfer.service';

describe('FormTransferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormTransferService]
    });
  });

  it('should be created', inject([FormTransferService], (service: FormTransferService) => {
    expect(service).toBeTruthy();
  }));
});
