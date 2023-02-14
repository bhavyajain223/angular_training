import { Component, Input } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(_service: MainServiceService) {
    console.log('login', _service.getCourse());
    console.log(this.name1);
    console.log(this.formDetail, 'formdetails');
  }
  @Input() item: any = 'item2';
  toggle: boolean = true;
  value1: any = 'this is one way binding data ';
  name: any = 'Bhavya Here';
  name1: any = 'dummy';
  formDetail: any = {
    name: 'bhavya',
    email: 'bhavyajain@gmail.com',
    password: 121212,
    mobile: 651365635,
  };
  toggleButton() {
    this.toggle = this.toggle ? false : true;
  }
  submitbtn() {
    console.log(this.name, 'name ');
  }
  keyPress(value: any) {
    console.log('key enter press', value);
  }

  formSubmit() {
    console.log(this.formDetail, 'formDetails', this.item, 'test');
  }
}
