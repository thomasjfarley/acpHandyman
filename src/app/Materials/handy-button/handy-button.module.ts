import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HandyButtonComponent} from './handy-button.component';
import {MatButtonModule} from '@angular/material';



@NgModule({
  declarations: [HandyButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [HandyButtonComponent],
})
export class HandyButtonModule { }
