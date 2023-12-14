import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { BigcardComponent } from './components/bigcard/bigcard.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { DetailComponent } from './pages/detail/detail.component';
import { Notfound404Component } from './pages/notfound404/notfound404.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BigcardComponent, SmallCardComponent, DetailComponent, Notfound404Component],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MenuComponent],
})
export class AppModule {}
