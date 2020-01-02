import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AcpEpoxyComponent} from './acp-epoxy.component';



@NgModule({
  declarations: [AcpEpoxyComponent],
  imports: [
    CommonModule
  ],
  exports: [AcpEpoxyComponent],
})
export class AcpEpoxyModule { }
