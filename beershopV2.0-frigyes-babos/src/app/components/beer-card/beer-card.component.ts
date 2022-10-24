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
  @Input() beerPrice?: number;

  @Input('show-cart') showCart: boolean = true;
  @Input('shopping-cart') shoppingCart: ShoppingCartItem[] = [];

  constructor(
    private service: BeerService,
    private cartService: CartService,
    public router: Router
  ) {}

  selectBeer(beer: Beer){
    this.router.navigate(['/details', {id: beer.id}])
    this.service.selectedBeer = beer;
  }

  addToCart() {
    if (this.beer) {
      let cartItem: ShoppingCartItem = { beer: this.beer, quantity: 1 };
      this.cartService.addToCart(cartItem);
    }
  }

  removeFromCart() {
    if (this.beer) {
      let cartItem: ShoppingCartItem = { beer: this.beer, quantity: -1 };
      this.cartService.addToCart(cartItem);
    }
  }


  getQuantity() {
    if (!this.shoppingCart) return 0;
    if (this.beer) {
      let item = this.shoppingCart.find((x) => x.beer.id === this.beer?.id);
      return item ? item.quantity : 0;
    }
    return 0;
  }

  ngOnInit(): void {}
}
