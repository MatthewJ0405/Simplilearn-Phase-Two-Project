import { TestBed } from '@angular/core/testing';

import { VideogameTriviaService } from './videogame-trivia.service';

describe('VideogameTriviaService', () => {
  let service: VideogameTriviaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideogameTriviaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
