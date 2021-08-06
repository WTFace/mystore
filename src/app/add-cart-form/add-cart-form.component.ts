import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-add-cart-form',
  templateUrl: './add-cart-form.component.html',
  styleUrls: ['./add-cart-form.component.css']
})
export class AddCartFormComponent implements OnInit {
  amount = 1;

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
