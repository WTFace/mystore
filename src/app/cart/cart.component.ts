import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: Cart[] = [];
  sum = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.carts = this.cartService.getCarts();
    this.sum = this.getTotalCost();
  }
  getTotalCost(){
    let total = 0;
    this.carts.map(x => {
      total += x.product.price * x.amount
    });
    return total;
  }
}
