import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { BeerService } from './services/beer.service';
import { HeaderComponent } from './components/header/header.component';
import { LanguageSelectComponent } from './components/language-select/language-select.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsPageComponent,
    ShoppingCartPageComponent,
    HeaderComponent,
    LanguageSelectComponent,
    SearchBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [BeerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
