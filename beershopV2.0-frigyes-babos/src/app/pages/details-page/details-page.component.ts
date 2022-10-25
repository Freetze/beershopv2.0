import { Beer } from 'src/app/interfaces/beer';
import { Component, Input, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';
import { RecentlyVisitedService } from 'src/app/services/recently.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Observable, switchMap, catchError } from 'rxjs';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {

  isAddedToCart: boolean = false;
  beer$;

  constructor(
    public service: BeerService,
    private cartService: CartService,
    public recentlyService: RecentlyVisitedService,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    this.beer$ = this.route.params.pipe(
      switchMap((params: Params) => this.service.getBeer$(params['id'])),
      catchError((err) => {
        this.router.navigate(['/']);
        throw err;
      })
    );
  }

  ngOnInit(): void {}
}
