import { Injectable } from '@angular/core';
import { ShoppingCartItem } from '../interfaces/shopping-cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

beer: ShoppingCartItem[] = [];
quantity: number = 0;

  constructor() { }


  addToCart(beer: ShoppingCartItem) {
    this.beer.push(beer);
    console.log(this.beer);

  }

  getCart() {
    return this.beer;
  }

  clearCart() {
    this.beer = [];
    return this.beer;
  }


}

