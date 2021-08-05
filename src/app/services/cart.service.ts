import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carts: Cart[] = [];
  constructor() { }

  addCart(product: Product, amount: number){
    const cart = {
      product_id: product.id,
      product: product,
      amount: amount
    }
    this.carts.push(cart);
    console.log(this.carts)
  }

  getCarts(): Cart[]{
    return this.carts;
  }
}
