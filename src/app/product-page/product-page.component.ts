import { Component, EventEmitter, Output } from '@angular/core';
import *as products from '../../user.json'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  product= products;
  @Output() productDetail : EventEmitter<any> = new EventEmitter<any>();

  constructor(){
    console.log(this.product.users)
  }
  passData(product1:any){
    this.productDetail.emit(product1)
  }

}
