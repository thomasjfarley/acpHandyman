import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AcpCarpentryModule} from './acp-carpentry/acp-carpentry.module';
import {AcpDrywallModule} from './acp-drywall/acp-drywall.module';
import {AcpEpoxyModule} from './acp-epoxy/acp-epoxy.module';
import {AcpMiscModule} from './acp-misc/acp-misc.module';



@NgModule({
  imports: [
    CommonModule,
    AcpCarpentryModule,
    AcpDrywallModule,
    AcpEpoxyModule,
    AcpMiscModule,
  ],
  exports: [
    AcpCarpentryModule,
    AcpDrywallModule,
    AcpEpoxyModule,
    AcpMiscModule,
  ],
})
export class AcpCardsModule { }
