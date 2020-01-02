import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServicesComponent} from './services.component';
import {MatCardModule, MatListModule} from '@angular/material';



@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
  ],
  exports: [ServicesComponent],
})
export class ServicesModule { }
