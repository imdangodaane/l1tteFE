import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  debug = true;
  loading$ = new BehaviorSubject<boolean>(false);
  loading = false;

  constructor() {}

  initLoader() {
    this.loading$.asObservable().subscribe(
      res => {
        this.loading = res;
      },
      err => {
        if (this.debug === true) {
          console.error(err);
        }
      }
    );
  }

  showLoader() {
    this.loading$.next(true);
  }

  hideLoader() {
    this.loading$.next(false);
  }
}
