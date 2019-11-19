import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterAccount } from 'src/app/_models/register-account';
import { API } from 'src/app/_configs/api.constant';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
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
}
