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
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; 

import { UrlSerializer,DefaultUrlSerializer, UrlTree } from '@angular/router';
import { ArtComponent } from './art/art.component';
import { GalleryCellComponent } from './gallery-cell/gallery-cell.component';
import { NppePrepComponent } from './nppe-prep/nppe-prep.component';

export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
    parse(url: string): UrlTree {
        return super.parse(url.toLowerCase()); 
    }
}

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},//redirectTo: 'under-construction'},
  { path: 'under-construction', component: SvdUnderConstructionComponent},
  { path: 'about', component: AboutMeComponent},
  { path: 'traydir', component: TrayDirComponent},
  { path: 'art', component: ArtComponent},
  { path: 'nppe', component: NppePrepComponent},
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
    NotFoundComponent,
    HomeComponent,
    ArtComponent,
    GalleryCellComponent,
    NppePrepComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [
    {
    provide: UrlSerializer,
    useClass: LowerCaseUrlSerializer
}],
  bootstrap: [SvdComponent]
})
export class SvdModule { }
