import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  headers = [
    { name: 'Trang chủ', url: 'home'},
    { name: 'Tải game', url: 'download'},
    { name: 'Thông tin', url: 'information'},
    { name: 'Hỗ trợ', url: 'support'},
    { name: 'Tin tức', url: 'news'},
    { name: 'Diễn đàn', url: 'forums'},
    { name: 'Wiki', url: 'wiki'},
    { name: 'Đăng ký', url: 'register'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
