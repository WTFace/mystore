import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carts: Cart[] = [];
  productSet = new Set();
  constructor() { }

  addCart(product: Product, amount: number){
    const cart = {
      product_id: product.id,
      product: product,
      amount: amount
    }
    if (this.productSet.has(product.id)) {
      for(const c of this.carts){
        if(c.product_id === product.id){
          c.amount += cart.amount;
          break;
        }
      }
    }else{
      this.productSet.add(cart.product_id);
      this.carts.push(cart);
    }
    alert(`${amount} items are added`);
  }

  getCarts(): Cart[]{
    return this.carts;
  }

  getTotalCost(){
    let total = 0;
    this.carts.map(x => {
      total += x.product.price * x.amount
    });
    return total;
  }

  removeFromCart(cart: Cart): Cart[]{
    this.carts = this.carts.filter(x => x.product_id !== cart.product_id);
    return this.carts;
  }
}
