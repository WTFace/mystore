import { Injectable } from '@angular/core';

type Info = {
  name: string,
  address: string,
  card: string
}

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  name = ''
  address = ''
  card = ''
  
  constructor() { }

  getOrderInfo(): Info{
    const info = {
      name: this.name,
      address: this.address,
      card: this.card
    }
    return info;
  }
  saveInfo(name: string, address: string, card: string): void {
    this.name = name;
    this.address = address;
    this.card = card;
  }
}
