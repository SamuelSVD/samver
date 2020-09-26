import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svd-gallery-cell',
  templateUrl: './gallery-cell.component.html',
  styleUrls: ['./gallery-cell.component.css']
})
export class GalleryCellComponent implements OnInit {
  @Input()
  public href: string;

  @Input()
  public alt: string;

  color: string;

  constructor() { }

  ngOnInit(): void {
  }

  public setStyle() {
    this.color = '#';
    var letters = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    for (var i = 0; i < 6; i++) {
        this.color += letters[Math.floor(Math.random() * 16)];
    }
    let styles = {
      'background': this.color,
      'background-image': 'radial-gradient(circle, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.50))'
    };
    return styles;
  }
}
