import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../models/Cart';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  amount = 1;
  carts: Cart[] = [];

  @Input() product: Product;

  constructor(private cartService: CartService) { 
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
  addCart(product: Product){
    this.cartService.addCart(product, Number(this.amount))
  }
}
