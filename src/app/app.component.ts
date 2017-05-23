import { Component, OnInit } from '@angular/core';

import { IdentityService } from './identity.service';
import { Identity } from './identity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ IdentityService ]
})

export class AppComponent implements OnInit {
  title = 'My Fake Identity';
  subtitle = 'for totally legit purposes';
  identity: Identity;

  constructor(private identityService: IdentityService) {}

  ngOnInit(): void {
    this.newIdentity();
  }

  newIdentity(): void {
     this.identityService.get()
      .then(identity => {
        this.identity = identity;
      });
  }
}
