import { TestBed } from '@angular/core/testing';

import { PharmacieMedicamentService } from './pharmacie-medicament.service';

describe('PharmacieMedicamentService', () => {
  let service: PharmacieMedicamentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacieMedicamentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
