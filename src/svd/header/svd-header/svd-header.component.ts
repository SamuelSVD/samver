import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'svd-header',
  templateUrl: './svd-header.component.html',
  styleUrls: ['./svd-header.component.css']
})
export class SvdHeaderComponent implements OnInit {

  menuitems;
  public showMenu: boolean = false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data/navbar.json").subscribe(data => {
      console.log(data);
      this.menuitems = (data as any).menuitems;
    })
  }

  closeMenu() {
    this.showMenu=false;
  }

}
