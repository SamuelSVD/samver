import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, Directive } from '@angular/core';
import { StyleService } from './services/style-service/style.service';

import { SvdComponent } from './svd.component';
import { SvdHeaderComponent } from './components/header/svd-header/svd-header.component';
import { SvdUnderConstructionComponent } from './components/pages/svd-under-construction/svd-under-construction.component';
import { SvdSocialMediaHeaderComponent } from './components/header/svd-social-media-header/svd-social-media-header.component';
import { SvdFooterComponent } from './components/footer/svd-footer/svd-footer.component';
import { RouterModule, Routes } from '@angular/router';
import { TrayDirComponent } from './components/pages/tray-dir/tray-dir.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './components/pages/home/home.component';

import { UrlSerializer, DefaultUrlSerializer, UrlTree } from '@angular/router';
import { ArtComponent } from './components/pages/art/art.component';
import { GalleryCellComponent } from './components/gallery-cell/gallery-cell.component';
import { NppePrepComponent } from './components/pages/nppe-prep/nppe-prep.component';
import { DropdownComponent } from './components/input/dropdown/dropdown.component';
import { TextboxComponent } from './components/input/textbox/textbox.component';
import { QuickDBAccessComponent } from './components/pages/quickdbaccess/quickdbaccess.component';

@Injectable()
export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
  parse(url: string): UrlTree {
    return super.parse(url.toLowerCase());
  }
}

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },//redirectTo: 'under-construction'},
  { path: 'under-construction', component: SvdUnderConstructionComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'traydir', component: TrayDirComponent },
  { path: 'quickdbaccess', component: QuickDBAccessComponent },
  { path: 'art', component: ArtComponent },
  { path: 'nppe', component: NppePrepComponent },
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  declarations: [
    SvdComponent,
    SvdHeaderComponent,
    SvdUnderConstructionComponent,
    SvdSocialMediaHeaderComponent,
    SvdFooterComponent,
    AboutMeComponent,
    TrayDirComponent,
    NotFoundComponent,
    HomeComponent,
    ArtComponent,
    GalleryCellComponent,
    NppePrepComponent,
    DropdownComponent,
    TextboxComponent,
    QuickDBAccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    StyleService,
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer
    }],
  bootstrap: [SvdComponent]
})
export class SvdModule {
  constructor(private httpClient: HttpClient, private styleService: StyleService) { this.ngOnInit()}
  ngOnInit(): void {
    this.httpClient.get("assets/data/themes.json").subscribe(data => {
      this.styleService.instantiateThemes((data as any).themes);
    });
  }
}
