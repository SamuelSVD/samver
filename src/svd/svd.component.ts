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
    console.log('Start');
    console.log(this._location.path());
    console.log('Continue');
    this._router.navigate([this._location.path()]);
  }
}