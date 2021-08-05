import { Product } from "./Product";

export class Cart {
    product_id: number;
    product: Product;
    amount: number;

    constructor(){
        this.product_id = 1;
        this.product = {
            id: 1,
            name: '',
            price: 1,
            url: '',
            description: ''
        };
        this.amount = 0;
    }
}