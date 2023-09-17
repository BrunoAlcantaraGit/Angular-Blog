import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LeftCardComponent } from './components/home/left_card/left_card.component';
import { RightCardComponent } from './components/home/right-card/right-card.component';
import { ProductComponent } from './components/menu/product/product.component';
import {HomeComponent} from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LeftCardComponent,
    RightCardComponent,
    ProductComponent,
    HomeComponent,
    FooterComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
