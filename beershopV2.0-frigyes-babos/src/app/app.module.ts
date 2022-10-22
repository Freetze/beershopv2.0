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
import { NavigationFieldComponent } from './components/navigation-field/navigation-field.component';
import { ProductWindowComponent } from './components/product-window/product-window.component';
import { BeerCardComponent } from './components/beer-card/beer-card.component';
import { FilterComponent } from './components/filter/filter.component';
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/buttons/secondary-button/secondary-button.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { AngularPaginatorModule } from 'angular-paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsPageComponent,
    ShoppingCartPageComponent,
    HeaderComponent,
    LanguageSelectComponent,
    SearchBarComponent,
    NavigationFieldComponent,
    ProductWindowComponent,
    BeerCardComponent,
    FilterComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    ShoppingCartComponent,
    PaginatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AngularPaginatorModule, FormsModule,  ReactiveFormsModule],
  providers: [BeerService, ShoppingCartService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
