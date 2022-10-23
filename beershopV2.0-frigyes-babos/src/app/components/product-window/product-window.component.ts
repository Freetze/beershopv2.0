import { Component, Input, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-product-window',
  templateUrl: './product-window.component.html',
  styleUrls: ['./product-window.component.scss'],
})
export class ProductWindowComponent implements OnInit {
  @Input() label: string = 'Reset to Default';
  @Input('beers')

  page: number = 1;
  tableSize: number = 9;
  beers$;
  filter$;

  constructor(public service: BeerService,  ) {
    this.beers$ = this.service.getBeers();
    // console.log(this.beers$);
    this.filter$ = this.service.getBeers();
  }

  ngOnInit(): void {
  }
}
