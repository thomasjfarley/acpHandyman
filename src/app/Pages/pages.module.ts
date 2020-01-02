import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServicesModule} from './our-services/services.module';
import { HomeComponent } from './home/home.component';
import {HomeModule} from './home/home.module';



@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    HomeModule,
  ],
  exports: [ServicesModule, HomeModule],
})
export class PagesModule { }
