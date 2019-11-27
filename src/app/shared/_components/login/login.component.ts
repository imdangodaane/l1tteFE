import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoaderService } from '@shared/_services/loader.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPayload } from 'src/app/_models/login-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() openingModal: NgbModalRef;
  @Output() loginState = new EventEmitter();

  userModel = {
    name: 'nquizx',
    title: 'Administrator'
  };
  loginPayload: LoginPayload = {
    userid: '',
    user_pass: ''
  };

  constructor(
    public loaderService: LoaderService,
    public modalService: NgbModal
  ) {}

  ngOnInit() {
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

  onLogin() {
    this.loaderService.showLoader('login');
    setTimeout(() => {
      this.loginState.emit(this.userModel);
      this.closeModal();
      this.loaderService.hideLoader();
    }, 1000);
  }

}
