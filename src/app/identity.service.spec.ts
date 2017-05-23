import { TestBed, inject } from '@angular/core/testing';

import { IdentityService } from './identity.service';

xdescribe('IdentityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdentityService]
    });
  });

  it('should ...', inject([IdentityService], (service: IdentityService) => {
    expect(service).toBeTruthy();
  }));
});
