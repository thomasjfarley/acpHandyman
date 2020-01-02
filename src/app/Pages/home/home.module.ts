import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {AcpCarpentryModule} from '../../Cards/acp-carpentry/acp-carpentry.module';
import {AcpDrywallModule} from '../../Cards/acp-drywall/acp-drywall.module';
import {AcpEpoxyModule} from '../../Cards/acp-epoxy/acp-epoxy.module';
import {AcpMiscModule} from '../../Cards/acp-misc/acp-misc.module';
import {MatCardModule} from '@angular/material';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AcpCarpentryModule,
    AcpDrywallModule,
    AcpEpoxyModule,
    AcpMiscModule,
    MatCardModule
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
