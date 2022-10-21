import { Component, Input, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Beer } from 'src/app/interfaces/beer';
import { Observable } from 'rxjs';
import { BeerService } from 'src/app/services/beer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-window',
  templateUrl: './product-window.component.html',
  styleUrls: ['./product-window.component.scss'],
})
export class ProductWindowComponent implements OnInit {
  @Input() label: string = 'Reset to Default';
  @Input('beers')
  beers$;
  filter$;

  constructor(public service: BeerService) {
    this.beers$ = this.service.getBeers();
    // console.log(this.beers$);
    this.filter$ = this.service.getBeers();
    
  }

  ngOnInit(): void {}
}
