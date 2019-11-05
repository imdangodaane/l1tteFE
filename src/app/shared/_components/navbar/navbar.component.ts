import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoginPayload } from 'src/app/_models/login-payload';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  headers = [
    { name: 'Đăng ký', url: 'register'},
    { name: 'Tải game', url: 'download'},
    { name: 'Thông tin', url: 'information'},
    { name: 'Hỗ trợ', url: 'support'},
    { name: 'Tin tức', url: 'news'},
    { name: 'Diễn đàn', url: 'forum'},
    { name: 'Wiki', url: 'wiki'},
  ]
  openingModal: NgbModalRef;
  loginPayload: LoginPayload = {
    userid: '',
    user_pass: ''
  };

  constructor(
    private route: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
  }

  navigateTo(url) {
    this.route.navigate([url]);
  }

  openModal(content) {
    this.openingModal = this.modalService.open(content);
  }

  closeModal() {
    this.openingModal.dismiss();
  }

  onLogin() {
    console.log('===> Onlogin!');
  }

}
