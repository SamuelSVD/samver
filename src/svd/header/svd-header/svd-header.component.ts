import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'svd-header',
  templateUrl: './svd-header.component.html',
  styleUrls: ['./svd-header.component.css']
})
export class SvdHeaderComponent implements OnInit {

  public showMenu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  closeMenu() {
    this.showMenu=false;
  }

}
