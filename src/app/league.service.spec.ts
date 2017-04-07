import { TestBed, inject } from '@angular/core/testing';

import { LeagueService } from './league.service';

describe('LeagueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeagueService]
    });
  });

  it('should ...', inject([LeagueService], (service: LeagueService) => {
    expect(service).toBeTruthy();
  }));
});
