import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './svd.component.html',
  styleUrls: ['./svd.component.css'],
})
export class SvdComponent {
  title = 'samver';
  constructor(public _router:Router, public _location: Location) {
    this._router.navigate([this._location.path()]);
  }
}