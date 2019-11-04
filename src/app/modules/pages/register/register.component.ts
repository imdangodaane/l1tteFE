import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { AccountService } from 'src/app/shared/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  debug = true;
  registerPayload = {
    userid: '',
    userpass: '',
    email: '',
    sex: '',
    birthdate: '',
  };
  reUserpass = '';
  sexSelection = [
    { name: 'Nam', value: 'M' },
    { name: 'Nữ', value: 'F'},
  ];
  policyAgreement = false;

  constructor(
    private toastrService: NbToastrService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (
      this.registerPayload.userid &&
      this.registerPayload.userpass &&
      this.registerPayload.email &&
      this.registerPayload.sex &&
      this.registerPayload.birthdate
      ) {
        this.accountService.register(this.registerPayload).subscribe(
          res => {
            console.log(res);
            this.toastrService.success('Đăng ký tài khoản thành công');
          },
          err => {
            if (this.debug === true) {
              console.error(err);
            }
          }
        );
      } else {
        this.toastrService.danger('', 'Bạn cần điền đầy đủ thông tin');
      }
  }

}
