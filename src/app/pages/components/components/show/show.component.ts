import { Component, OnInit } from '@angular/core';
import {UserService} from '../treeView/user.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  private userId: string;
  public user: any;
  constructor(private _user: UserService) {
      debugger;
      this.userId = location.hash.split("/").pop();
    this._user.getSingleUseruserId(this.userId).then((res) => {
      this.user = res.user;      
    });
  }

  ngOnInit() {
  }

}
