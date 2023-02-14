// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
import { MainServiceService } from '../main-service.service';
export class LoginService {
  constructor(private _service: MainServiceService) {}
  loginDetail() {
    return {
      name: 'jyoti',
      age: '27',
      phoneNo: '9832993932',
      City: this._service.setAddress().city,
    };
    console.log(this._service.setAddress().city);
  }
}
