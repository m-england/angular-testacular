import { Component, OnInit, Input } from '@angular/core';

import { Identity } from '../identity';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html'
})

export class IdentityComponent {
  @Input() identity: Identity;

  constructor() { }
}
