import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from 'src/app/interfaces/beer';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cart$!: Observable<Beer[]>;

  constructor() {}

  ngOnInit(): void {}
}
