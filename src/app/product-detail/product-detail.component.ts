import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product

  constructor(private route: ActivatedRoute, private productService: ProductService) { 
    this.product = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: ''
    }
  }

  ngOnInit(): void {
    let product_id = 0;
    this.route.params.subscribe(params => {
      product_id = Number(params['id']);
    });

    this.productService.getProducts().subscribe(res => {
      this.product = res.filter(x => x.id === product_id)[0];
    });
  }
}
