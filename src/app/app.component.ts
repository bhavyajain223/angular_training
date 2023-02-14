import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_Project';
  item2="item2";
  products =[{
    id:1,
    title:"product title ",
    detail:"product detial",
  },
  {
    id:2,
    title:"product title 2",
    detail:"product detial 2",
  }
  ,
  {
    id:3,
    title:"product title ",
    detail:"product detial",
  },
  {
    id:4,
    title:"product title ",
    detail:"product detial",
  },{
    id:5,
    title:"product title ",
    detail:"product detial",
  }
]
productdetail :any =null;
constructor(){

}
assignData(event:any){
console.log(event,"child to parent data through output")
this.productdetail =event;
}
}
