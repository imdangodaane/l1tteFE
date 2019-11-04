import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterAccount } from 'src/app/_models/register-account';
import { API } from 'src/app/_configs/api.constant';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) {}

  register(payload: RegisterAccount) {
    const url = API.API_REGISTER;
    return this.http.post<any>(url, payload);
  }
}
