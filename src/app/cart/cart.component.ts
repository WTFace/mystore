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
    this.sum = this.cartService.getTotalCost();
  }
  
  changeAmount(cart: Cart, amount: string): void {
    const amt = Number(amount);

    if (isNaN(amt)) {
      alert('invalid amount');
    } else{
      cart.amount = amt;
      this.sum = this.cartService.getTotalCost();
    }
  }

  remove(cart: Cart){
    this.carts = this.cartService.removeFromCart(cart);
    this.sum = this.cartService.getTotalCost();
  }
}
