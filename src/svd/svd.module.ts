import { AboutMeComponent } from './about-me/about-me.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SvdComponent } from './svd.component';
import { SvdHeaderComponent } from './header/svd-header/svd-header.component';
import { SvdContentComponent } from './svd-content/svd-content.component';
import { SvdUnderConstructionComponent } from './svd-under-construction/svd-under-construction.component';
import { SvdSocialMediaHeaderComponent } from './header/svd-social-media-header/svd-social-media-header.component';
import { SvdFooterComponent } from './footer/svd-footer/svd-footer.component';
import { RouterModule, Routes } from '@angular/router';
import { TrayDirComponent } from './tray-dir/tray-dir.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'under-construction'},
  { path: 'under-construction', component: SvdUnderConstructionComponent},
  { path: 'about', component: AboutMeComponent},
  { path: 'TrayDir', component: TrayDirComponent},
  { path: '**', component: NotFoundComponent}
]
@NgModule({
  declarations: [
    SvdComponent,
    SvdHeaderComponent,
    SvdContentComponent,
    SvdUnderConstructionComponent,
    SvdSocialMediaHeaderComponent,
    SvdFooterComponent,
    AboutMeComponent,
    TrayDirComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [SvdComponent]
})
export class SvdModule { }
