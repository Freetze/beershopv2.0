import { Component, OnInit,Input } from '@angular/core';
import { ShoppingCartItem } from 'src/app/interfaces/shopping-cart-item';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {
  @Input() label: string = 'Add to Cart'

  @Input() buttonLabel?: string;
  @Input() imgSrc?: string;
  @Input() type?: string;
  @Input() buttonWidth?: string;



  constructor() { }

  ngOnInit(): void {
  }


}
