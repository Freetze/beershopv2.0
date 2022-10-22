import { Injectable } from '@angular/core';
import { Beer } from '../interfaces/beer';
@Injectable({
  providedIn: 'root'
})
export class RecentlyVisitedService {

  seenItems: Beer[] = []

  constructor() { }

  addToRecentlyVisited(beer: Beer): void {
    if(this.seenItems.length < 4) {
      this.seenItems.push(beer)
    } else {
      this.seenItems.splice(0,1);
      this.seenItems.push(beer)
    }
  }
}
