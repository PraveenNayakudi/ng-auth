import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addProduct(product:NgForm){
    console.log(product)
  }
}
