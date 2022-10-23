import { Component, OnInit, Input } from '@angular/core';
import { Beer } from 'src/app/interfaces/beer';
import { ShoppingCartItem } from 'src/app/interfaces/shopping-cart-item';
import { BeerService } from 'src/app/services/beer.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss'],
})
export class BeerCardComponent implements OnInit {
  @Input() beer?: Beer;
  @Input() name?: string;
  @Input() image_url?: string;
  @Input() tagline?: string;
  @Input() contributor?: string;

  constructor(
    private beerService: BeerService,
    private cartService: CartService,
    private router: Router
  ) {}

  // addToCart(beer: ShoppingCartItem) {
  //   this.cartService.addToCart(beer);
  //   window.alert('Your product has been added to the cart!');

  // }

  addToCart() {
    console.log(this.beer);

    if (this.beer) {
      let cartItem: ShoppingCartItem = { beer: this.beer, quantity: 1 };
      this.cartService.addToCart(cartItem);

    }
  }

  ngOnInit(): void {}
}
