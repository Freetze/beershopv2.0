import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartItem } from 'src/app/interfaces/shopping-cart-item';
import { CartService } from 'src/app/services/cart.service';
import { Beer } from 'src/app/interfaces/beer';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(private cartService: CartService) {}


items: ShoppingCartItem[] = this.cartService.beer;

  ngOnInit(): void {}
}
