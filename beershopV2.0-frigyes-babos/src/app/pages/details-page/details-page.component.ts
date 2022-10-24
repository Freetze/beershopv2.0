import { Component, Input, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';
import { RecentlyVisitedService } from 'src/app/services/recently.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  @Input() name?: string ;
  @Input() image_url?: string;
  @Input() tagline?: string;

  isAddedToCart: boolean = false;


  constructor( public service: BeerService, private cartService: CartService, public recentlyService: RecentlyVisitedService, private route: Router) {
  }



  ngOnInit(): void {

  }

}
