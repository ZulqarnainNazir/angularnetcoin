import {Injectable} from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Headers, RequestOptions } from '@angular/http';


@Injectable()
export class UserService {

  constructor(private _http: Http) {
  }

  getUser() {
    let headers: any;
    headers  = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin' , '*');
    return this._http.post('https://netplay.herokuapp.com/api/users', {})
            .toPromise()
            .then(res => res.json());
  }
}
