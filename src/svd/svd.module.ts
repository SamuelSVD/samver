import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SvdRoutingModule } from './svd-routing.module';
import { SvdComponent } from './svd.component';
import { SvdHeaderComponent } from './header/svd-header/svd-header.component';
import { SvdContentComponent } from './svd-content/svd-content.component';
import { SvdUnderConstructionComponent } from './svd-under-construction/svd-under-construction.component';
import { SvdSocialMediaHeaderComponent } from './header/svd-social-media-header/svd-social-media-header.component';
import { SvdFooterComponent } from './footer/svd-footer/svd-footer.component';

@NgModule({
  declarations: [
    SvdComponent,
    SvdHeaderComponent,
    SvdContentComponent,
    SvdUnderConstructionComponent,
    SvdSocialMediaHeaderComponent,
    SvdFooterComponent
  ],
  imports: [
    BrowserModule,
    SvdRoutingModule
  ],
  providers: [],
  bootstrap: [SvdComponent]
})
export class SvdModule { }
