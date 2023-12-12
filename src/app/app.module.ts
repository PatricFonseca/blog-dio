import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { BigcardComponent } from './components/bigcard/bigcard.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BigcardComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MenuComponent],
})
export class AppModule {}
