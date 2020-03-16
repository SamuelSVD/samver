import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './svd.component.html',
  styleUrls: ['./svd.component.css'],
})
export class SvdComponent {
  title = 'samver';
  constructor(public _router:Router) {
    console.log('Start');
    console.log(window.location.pathname);
    console.log(sessionStorage.redirect);
    console.log('Continue');
    this._router.navigate([window.location.pathname]);
  }
}