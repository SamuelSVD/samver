import { Component, OnInit } from '@angular/core';
import { SocialMediaList } from '../../../class/social-media/social-media-list';

@Component({
  selector: 'svd-social-media-header',
  templateUrl: './svd-social-media-header.component.html',
  styleUrls: ['./svd-social-media-header.component.css']
})
export class SvdSocialMediaHeaderComponent implements OnInit {
  socialMedia: SocialMediaList;
  socialMediaLookup;
  constructor() {
    this.socialMedia = new SocialMediaList();
    this.socialMediaLookup = {
      Instagram: 'fa-instagram',
      Twitter: 'fa-twitter',
      GitHub: 'fa-github',
      LinkedIn: 'fa-linkedin-square'
    }

  }

  ngOnInit() {
  }

  getSocialMediaClass(name: string) {
    return 'fa fa-lg ' + this.socialMediaLookup[name];
  }
}
