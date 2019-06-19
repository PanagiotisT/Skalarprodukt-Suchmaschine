import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KopfbereichComponent } from './kopfbereich/kopfbereich.component';
import { HauptteilComponent } from './hauptteil/hauptteil.component';
import { FormsModule } from '@angular/forms';
import { SeiteComponent } from './seite/seite.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

@NgModule({
  declarations: [
    AppComponent,
    KopfbereichComponent,
    HauptteilComponent,
    SeiteComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
