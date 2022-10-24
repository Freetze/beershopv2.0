import { Component, Input, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';
import { CartService } from 'src/app/services/cart.service';
import { Beer } from 'src/app/interfaces/beer';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-window',
  templateUrl: './product-window.component.html',
  styleUrls: ['./product-window.component.scss'],
})
export class ProductWindowComponent implements OnInit {
  @Input() label: string = 'Reset to Default';
  phrase: Beer[] = [];
  @Input() beer?: Beer

  page: number = 1;
  tableSize: number = 9;
  beers$;
  filter$;
  productSubscription: Subscription | undefined;

  constructor(public service: BeerService, private cartService: CartService, public router: Router) {
    this.beers$ = this.service.getBeers();
    this.filter$ = this.service.getBeers();
  }

  ngOnInit(): void {}

}
