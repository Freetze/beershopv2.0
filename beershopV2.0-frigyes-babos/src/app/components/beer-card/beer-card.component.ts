import { Component, OnInit, Input } from '@angular/core';
import { Beer } from 'src/app/interfaces/beer';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { BeerService } from 'src/app/services/beer.service';

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

  constructor(private cartService: ShoppingCartService, private beerService: BeerService) {}

  ngOnInit(): void {}
}
