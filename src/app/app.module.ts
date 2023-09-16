import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LeftCardComponent } from './components/home/left_card/left_card.component';
import { RightCardComponent } from './components/home/right-card/right-card.component';
import { ProductComponent } from './components/menu/product/product.component';
import {HomeComponent} from './components/home/home.component';
import { SolutionsComponent } from './components/menu/solutions/solutions.component';
import { ConsultingComponent } from './components/menu/consulting/consulting.component';
import { LearnComponent } from './components/menu/learn/learn.component';
import { SupportComponent } from './components/menu/support/support.component'



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LeftCardComponent,
    RightCardComponent,
    ProductComponent,
    HomeComponent,
    SolutionsComponent,
    ConsultingComponent,
    LearnComponent,
    SupportComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
