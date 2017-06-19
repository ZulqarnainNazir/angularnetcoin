import {Component} from '@angular/core';

import {FeedService} from './feed.service';

@Component({
  selector: 'feed',
  templateUrl: './feed.html',
  styleUrls: ['./feed.scss']
})
export class Feed {

  public feed: Array<Object>;
  private users: Array<Object>; 

  constructor(private _feedService: FeedService) {
  }

  ngOnInit() {
    this._feedService.getData().then((res) => {
      this.feed = res.Feedbacks;
    });
  }

  private _loadFeed() {

  }

}
