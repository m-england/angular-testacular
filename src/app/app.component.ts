import { Component, OnInit } from '@angular/core';

import { IdentityService } from './identity.service';
import { Identity } from './identity';

import { AppConstants } from './app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title = 'My Fake Identity';
  subtitle = 'for totally legit purposes';
  identity: Identity;
  identitiesGenerated = 0;
  identitiesAllowed = AppConstants.IdentitiesAllowed;

  constructor(private identityService: IdentityService) {}

  ngOnInit(): void {
    this.newIdentity();
  }

  newIdentity(): void {
    if (this.identitiesGenerated <= this.identitiesAllowed){
     this.identityService.get()
      .then(identity => {
        this.identity = identity;
        this.identitiesGenerated++;
      });
    } else {
      this.identity = null;
    }
  }
}
