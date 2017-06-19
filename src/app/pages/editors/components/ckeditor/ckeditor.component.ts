import { Component } from '@angular/core';
import {UserService} from './user.service';

import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ckeditor-component',
  templateUrl: './ckeditor.html',
  styleUrls: ['./ckeditor.scss']
})

export class Ckeditor {
  public count: Number = 0; 
  public users: any = [];
  constructor(private _user: UserService) {
    this._user.getUser().then((res) => {
      debugger;
      this.users = res.users;
    });
  }
}
