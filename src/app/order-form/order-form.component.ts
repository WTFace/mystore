import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  name = ''
  address = ''
  card = ''

  @Input() sum: number;

  constructor(private router: Router, private orderService: OrderService, private cartService: CartService) {
    this.sum = 0;
  }

  ngOnInit(): void {
    const info = this.orderService.getOrderInfo();
    this.name = info.name;
    this.address = info.address;
    this.card = info.card;
  }

  order(){
    this.orderService.saveInfo(this.name, this.address, this.card);
    this.router.navigate(['order-complete']);
  }
}
