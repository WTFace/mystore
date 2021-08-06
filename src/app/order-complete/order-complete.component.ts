import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css']
})
export class OrderCompleteComponent implements OnInit {
  sum = 0;
  username = ''
  constructor(private cartService: CartService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.sum = this.cartService.getTotalCost();
    this.username = this.orderService.getOrderInfo().name;
  }

}
