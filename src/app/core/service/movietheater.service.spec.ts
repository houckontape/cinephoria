import { TestBed } from '@angular/core/testing';

import { MovietheaterService } from './movietheater.service';

describe('MovietheaterService', () => {
  let service: MovietheaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovietheaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
