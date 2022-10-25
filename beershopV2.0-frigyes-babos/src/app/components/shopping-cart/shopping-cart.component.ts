import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartItem } from 'src/app/interfaces/shopping-cart-item';
import { CartService } from 'src/app/services/cart.service';
import { Beer } from 'src/app/interfaces/beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  @Input() beer?: Beer;
  @Input() image_url?: string

  constructor(private cartService: CartService, private service: BeerService) {}

  items: ShoppingCartItem[] = this.cartService.beer;


  addToCart() {
    if (this.beer) {
      let cartItem: ShoppingCartItem = { beer: this.beer, quantity: 1 };
      this.cartService.addToCart(cartItem);
    }
  }

  removeFromCart() {
    if (this.beer) {
      let cartItem: ShoppingCartItem = { beer: this.beer, quantity: -1 };
      this.cartService.removeItem(cartItem);
    }
  }

  ngOnInit(): void {}
}
