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
  user: LoginPayload;
  openingModal: NgbModalRef;
  loginPayload: LoginPayload = {
    userid: '',
    user_pass: ''
  };
  headers = [
    { name: 'Đăng ký', url: 'register'},
    { name: 'Tải game', url: 'download'},
    { name: 'Thông tin', url: 'information'},
    { name: 'Hỗ trợ', url: 'support'},
    { name: 'Tin tức', url: 'news'},
    { name: 'Diễn đàn', url: 'forum'},
    { name: 'Wiki', url: 'wiki'},
  ]
  userModel = {
    name: 'nquizx',
    title: 'Administrator'
  }
  userMenu = [
    { title: 'Trang cá nhân', data: {id: 'personal-page'} },
    { title: 'Thông tin tài khoản', data: {id: 'account-info'} },
    { title: 'Đăng bài viết', data: {id: 'new-post'} },
    { title: 'Đăng xuất', data: {id: 'logout'} },
  ]
  emailResetPW = '';

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
    this.closeModal();
    this.openingModal = this.modalService.open(content);
  }

  closeModal() {
    try {
      this.openingModal.close();
    } catch (e) {}
  }

  onLogout() {
    this.user = null;
  }

  userMenuContextListener() {
    this.nbMenuService.onItemClick().subscribe(event => {
      console.log("TCL: NavbarComponent -> userMenuContextListener -> event", event)
      switch(event.item.data.id) {
        case 'logout':
          this.onLogout();
          break;
        default:
          this.navigateTo(event.item.data.id);
          break;
      }
    });
  }

  loginHandler(event: any) {
    this.user = event;
    console.log("TCL: NavbarComponent -> loginHandler -> event", event);
  }

}
