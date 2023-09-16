import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LeftCardComponent } from './components/left-card/left-card.component';
import { RigthCardComponent } from './components/rigth-card/rigth-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LeftCardComponent,
    RigthCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
