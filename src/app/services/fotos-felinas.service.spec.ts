import { TestBed } from '@angular/core/testing';

import { FotosFelinasService } from './fotos-felinas.service';

describe('FotosFelinasService', () => {
  let service: FotosFelinasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotosFelinasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
