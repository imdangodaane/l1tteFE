import { Component, OnInit, Directive, ViewChild } from '@angular/core';

@Directive({
  selector: '.img-close'
})

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  showHomepageNotice = true;

  constructor() { }

  ngOnInit() {
  }

  closeNotice() {
    this.showHomepageNotice = false;
  }

}
