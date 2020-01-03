import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HandyButtonModule} from './Materials/handy-button/handy-button.module';
import {AcpCardsModule} from './Cards/acp-cards.module';
import {PagesModule} from './Pages/pages.module';
import {MatButtonModule, MatMenuModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HandyButtonModule,
    AcpCardsModule,
    PagesModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
