import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AcpCarpentryComponent} from './acp-carpentry.component';



@NgModule({
  declarations: [AcpCarpentryComponent],
  imports: [
    CommonModule
  ],
  exports: [AcpCarpentryComponent],
})
export class AcpCarpentryModule { }
