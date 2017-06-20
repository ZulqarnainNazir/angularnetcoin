import {Component} from '@angular/core';

import {ChartistJsService} from './chartistJs.service';

@Component({
  selector: 'chartist-js',
  templateUrl: './chartistJs.html',
  styleUrls: ['./chartistJs.scss']
})

export class ChartistJs {
  public count: Number = 0; 
  public users: any = [];
  
  constructor(private _user: ChartistJsService) {
    this._user.getAll().then((res) => {
      debugger;
      this.users = res.Message;
    });
  }

  ngOnInit() {
    // this.data = this._chartistJsService.getAll();
  }

  // getResponsive(padding, offset) {
  //   return this._chartistJsService.getResponsive(padding, offset);
  // }
}
