import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: ProductsComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'cart', component: CartComponent},
  { path: 'order-complete', component: OrderCompleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
