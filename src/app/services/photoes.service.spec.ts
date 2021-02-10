import { TestBed } from '@angular/core/testing';

import { PhotoesService } from './photoes.service';

describe('PhotoesService', () => {
  let service: PhotoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
