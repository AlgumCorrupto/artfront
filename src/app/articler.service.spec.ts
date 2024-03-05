import { TestBed } from '@angular/core/testing';

import { ArticlerService } from './articler.service';

describe('ArticlerService', () => {
  let service: ArticlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
