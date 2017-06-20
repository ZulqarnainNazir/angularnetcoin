import {Component} from '@angular/core';
import {TreeModel} from 'ng2-tree';
import {UserService} from './user.service';

@Component({
  selector: 'tree-view',
  templateUrl: './treeView.html',
})

export class TreeView {

  // tree: TreeModel = {
  //   value: 'Programming languages by programming paradigm',
  //   children: [
  //     {
  //       value: 'Object-oriented programming',
  //       children: [
  //         {value: 'Java'},
  //         {value: 'C++'},
  //         {value: 'C#'},
  //       ]
  //     },
  //     {
  //       value: 'Prototype-based programming',
  //       children: [
  //         {value: 'JavaScript'},
  //         {value: 'CoffeeScript'},
  //         {value: 'Lua'},
  //       ]
  //     }
  //   ]
  // };
  
  public count: Number = 0; 
  public users: any = [];
  
  constructor(private _user: UserService) {
      this._user.getUser().then((res) => {
        debugger;
        this.users = res.users;
    });
  }
}
