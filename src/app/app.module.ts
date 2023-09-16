import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LeftCardComponent } from './components/left_card/left_card.component';
import { RightCardComponent } from './components/right-card/right-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LeftCardComponent,
    RightCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
