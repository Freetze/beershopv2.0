import { Component, OnInit, Input } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';
import { Beer } from 'src/app/interfaces/beer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() filteredBeers: Beer[] = [];

  constructor(private service: BeerService) { }

  ngOnInit(): void {
  }

}
