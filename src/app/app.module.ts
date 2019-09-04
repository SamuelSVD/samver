import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvdHeaderComponent } from './svd-header/svd-header.component';
import { SvdContentComponent } from './svd-content/svd-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SvdHeaderComponent,
    SvdContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
