import { StyleService } from './../../app/style.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lines = [];
  constructor(private httpClient: HttpClient, private styleService: StyleService) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data/home.json").subscribe(data => {
      console.log(data);
      this.lines = (data as any).Lines;
    })
  }
  fun() {
    console.log('lol');
    this.styleService.setStyle(".theme-color-bg", "background", this.randomColorString());
    this.styleService.setStyle(".theme-color-bg", "color", this.randomColorString());
    var colour = this.randomColorString();
    this.styleService.setStyle(".theme-color-box", "background", colour);
    this.styleService.setStyle(".theme-color-box", "color", this.randomColorString());
    this.styleService.setStyle(".theme-color-fill", "fill", colour);
    this.styleService.setStyle(".theme-color-box-hover:hover", "background", this.randomColorString());
  }
  randomColorString() {
    var s = '#';
    for (var i = 0; i < 6; i++) {
      var j = Math.floor(Math.random() * Math.floor(16));
      s+='0123456789abcdef'.charAt(j);
    }
    return s;
  }
}
