import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() product: Product;
  constructor() { 
    this.product = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: ''
    }
  }

  ngOnInit(): void {
    
  }

}
