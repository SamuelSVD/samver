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
  themes = [
    {
      name: 'light',
      styles: [
        { selectorText: '.theme-color-bg', styleName: 'background', value: 'white' },
        { selectorText: '.theme-color-bg', styleName: 'color', value: 'black' },
        { selectorText: '.theme-color-box', styleName: 'background', value: '#5d6483' },
        { selectorText: '.theme-color-box', styleName: 'color', value: 'white' },
        { selectorText: '.theme-color-fill', styleName: 'fill', value: '#5d6483' },
        { selectorText: '.theme-color-box-hover:hover', styleName: 'background', value: '#7D606E' },
      ]
    },
    {
      name: 'dark-green',
      styles: [
        { selectorText: '.theme-color-bg', styleName: 'background', value: 'rgb(15,107,184)' },
        { selectorText: '.theme-color-bg', styleName: 'color', value: 'rgb(30,206,195)' },
        { selectorText: '.theme-color-box', styleName: 'background', value: 'rgb(40,47,16)' },
        { selectorText: '.theme-color-box', styleName: 'color', value: 'rgb(197,240,37)' },
        { selectorText: '.theme-color-fill', styleName: 'fill', value: 'rgb(40,47,16)' },
        { selectorText: '.theme-color-box-hover:hover', styleName: 'background', value: 'rgb(100,133,26)' },
      ]
    },
/*    {
      styles: [
        { selectorText: '.theme-color-bg', styleName: 'background', value: '' },
        { selectorText: '.theme-color-bg', styleName: 'color', value: '' },
        { selectorText: '.theme-color-box', styleName: 'background', value: '' },
        { selectorText: '.theme-color-box', styleName: 'color', value: '' },
        { selectorText: '.theme-color-fill', styleName: 'fill', value: '' },
        { selectorText: '.theme-color-box-hover:hover', styleName: 'background', value: '' },
      ]
    },*/
  ];
  ngOnInit(): void {
    this.httpClient.get("assets/data/home.json").subscribe(data => {
      console.log(data);
      this.lines = (data as any).Lines;
    })
  }
  fun() {
    this.randomTheme();
  }
  applyTheme(theme) {
    console.log(theme.styles);
    for(var i = 0; i < theme.styles.length; i++) {
      var style = theme.styles[i];
      this.styleService.setStyle(style.selectorText, style.styleName, style.value);
    }
  }
  randomTheme() {
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
      s += '0123456789abcdef'.charAt(j);
    }
    return s;
  }
}
