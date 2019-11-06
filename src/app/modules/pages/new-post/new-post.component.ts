import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewPostComponent implements OnInit {
  post = {
    badges: {
      news: false,
      event: false,
      hot: false,
      guide: false,
      etc: false
    }
  }

  constructor(
  ) { }

  ngOnInit() {
  }

}
