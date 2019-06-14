import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KopfbereichComponent } from './kopfbereich/kopfbereich.component';
import { HauptteilComponent } from './hauptteil/hauptteil.component';

@NgModule({
  declarations: [
    AppComponent,
    KopfbereichComponent,
    HauptteilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
