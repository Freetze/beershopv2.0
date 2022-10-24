import { Injectable } from '@angular/core';
import { ShoppingCartItem } from '../interfaces/shopping-cart-item';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  beer: ShoppingCartItem[] = [];
  quantity?: number;

  constructor() {}

  addToCart(beer: ShoppingCartItem) {
    this.beer.push(beer);
    console.log(this.beer);
  }

  removeItem(beer: ShoppingCartItem) {
    this.beer = this.beer.filter((x) => x.beer.id !== beer.beer.id);
    return this.beer;
  }

  totalItemsCount() {
    return this.beer.length;
  }
}
