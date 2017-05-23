import { Injectable } from '@angular/core';
import { Http, Headers }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Identity } from './identity';

@Injectable()
export class IdentityService {
  private apiUrl = 'https://randomuser.me/api/?nat=us';  
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  get(): Promise<Identity> {
    return this.http
              .get(this.apiUrl, {headers: this.headers})
              .toPromise()
              .then(res => {
                return res.json().results[0] as Identity;
              })
              .catch(error => console.log(error));
  }
}
