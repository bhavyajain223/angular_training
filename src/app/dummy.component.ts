import { Component } from '@angular/core';
import { MainServiceService } from './main-service.service';

@Component({
  selector: 'app-dummy',
  template: '<h1>Dummy Component only using ts file</h1>',
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class DummyComponent {
  constructor(_service: MainServiceService) {
    console.log('dummy', _service.getCourse());
  }
}
