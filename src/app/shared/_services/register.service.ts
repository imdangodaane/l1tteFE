import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/_configs/api.constant';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) {}

  register(payload) {
    const url = API.API_REGISTER;
    this.http.post<any>(url, payload);
  }
}
