import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductsComponent,
    NavComponent,
    CartComponent,
    OrderFormComponent,
    OrderCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
