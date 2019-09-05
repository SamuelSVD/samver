import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SvdRoutingModule } from './svd-routing.module';
import { SvdComponent } from './svd.component';
import { SvdHeaderComponent } from './svd-header/svd-header.component';
import { SvdContentComponent } from './svd-content/svd-content.component';

@NgModule({
  declarations: [
    SvdComponent,
    SvdHeaderComponent,
    SvdContentComponent
  ],
  imports: [
    BrowserModule,
    SvdRoutingModule
  ],
  providers: [],
  bootstrap: [SvdComponent]
})
export class SvdModule { }
