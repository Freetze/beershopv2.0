import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beer } from '../interfaces/beer';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from '../interfaces/shopping-cart-item';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  public URL = environment.API;

  beers: Beer[] = [];

  constructor(private http: HttpClient) {}

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.URL}beers?page=2&per_page=60`);
  }

  clearCart() {
    this.beers = [];
    return this.beers;
  }
}
