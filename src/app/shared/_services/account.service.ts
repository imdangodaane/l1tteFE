import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterAccount } from 'src/app/_models/register-account';
import { API } from 'src/app/_configs/api.constant';
import { LoginPayload } from 'src/app/_models/login-payload';
import { ResetPWPayload } from 'src/app/_models/resetpw-payload';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) {}

  register(payload: RegisterAccount) {
    const url = API.API_ACCOUNT.API_ACCOUNT_REGISTER;
    return this.http.post<any>(url, payload, httpOptions);
  }

  login(payload: LoginPayload) {
    const url = API.API_ACCOUNT.API_ACCOUNT_LOGIN;
    return this.http.post<any>(url, payload, httpOptions);
  }

  resetPW(payload: ResetPWPayload) {
    const url = API.API_ACCOUNT.API_ACCOUNT_RESETPW;
    return this.http.post<any>(url, payload, httpOptions);
  }
}
