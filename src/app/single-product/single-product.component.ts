import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent {
  @Input() productDetail:any
  @Output() removeDetail : EventEmitter<null>= new EventEmitter<null>();

  backProductPage(){
    this.removeDetail.emit(null)

  }
}
