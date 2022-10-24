import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Input() placeholder = 'Search';
  phrase: string = '';

  beers$;


  constructor(private service: BeerService) {
    this.beers$ = this.service.getBeers();

  }

  ngOnInit(): void {}
}
