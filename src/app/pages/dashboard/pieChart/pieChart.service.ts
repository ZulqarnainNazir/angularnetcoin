import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Headers, RequestOptions } from '@angular/http';


@Injectable()
export class PieChartService {
  constructor(private _baConfig: BaThemeConfigProvider, private _http: Http) {
  }

  getData() {
    let headers: any;
    headers  = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin' , '*');
    return this._http.post('https://netplay.herokuapp.com/api/users/total', {})
            .toPromise()
            .then(res => res.json());
  }

  getTotalTickets() {
    let headers: any;
    headers  = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin' , '*');
    return this._http.post('https://netplay.herokuapp.com/api/ticket/total/all', {})
            .toPromise()
            .then(res => res.json());
  }

  getTotalActiveTickets() {
    let headers: any;
    headers  = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin' , '*');
    return this._http.post('https://netplay.herokuapp.com/api/ticket/total/active', {})
            .toPromise()
            .then(res => res.json());
  }
}
