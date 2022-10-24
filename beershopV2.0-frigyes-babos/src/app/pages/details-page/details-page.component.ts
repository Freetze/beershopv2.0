import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/interfaces/beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  @Input() name?: string ;


  constructor( public service: BeerService) { }



  ngOnInit(): void {
  }

}
