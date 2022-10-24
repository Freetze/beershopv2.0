import { Component, Input, OnInit } from '@angular/core';
import { RecentlyVisitedService } from 'src/app/services/recently.service';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {
@Input() label: string = 'Checkout';

  constructor(public recentlyService: RecentlyVisitedService) {
  }

  ngOnInit(): void {
  }

}
