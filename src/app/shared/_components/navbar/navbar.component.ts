import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoginPayload } from 'src/app/_models/login-payload';
import { LoaderService } from '../../_services/loader.service';
import { NbMenuService } from '@nebular/theme';

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
  userModel = {
    name: 'nquizx',
    title: 'Administrator'
  }
  user: any;
  userMenu = [
    { title: 'Thông tin tài khoản', data: {id: 'account-info'} },
    { title: 'Đăng xuất', data: {id: 'logout'} },
  ]

  constructor(
    private route: Router,
    private modalService: NgbModal,
    public loaderService: LoaderService,
    private nbMenuService: NbMenuService
  ) {}

  ngOnInit() {
    this.loaderService.initLoader();
    this.userMenuContextListener();
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
    this.loaderService.showLoader('login');
    setTimeout(() => {
      this.user = this.userModel;
      this.closeModal();
      this.loaderService.hideLoader();
    }, 3000);
  }

  onLogout() {
    this.user = null;
  }

  userMenuContextListener() {
    this.nbMenuService.onItemClick().subscribe(event => {
      switch(event.item.data.id) {
        case 'logout':
          this.onLogout();
          break;
        default:
          console.log('===> Im listening to userMenuContext');
      }
    });
  }

}
