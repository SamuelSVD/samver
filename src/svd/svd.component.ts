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
    var redirect = sessionStorage.redirect;
    // Remove the URL from sessionStorage.
    delete sessionStorage.redirect;
    // Check if we actually need to redirect.
    if (redirect && redirect != location.href) {
      // We need to redirect to the URL the user was trying to access.
      console.log('Start');
      console.log(redirect.replace('https://samver.ca',''));
      console.log('Continue');
      this._router.navigate([redirect.replace('https://samver.ca','')]);
    }
  }
}