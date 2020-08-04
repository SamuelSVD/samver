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

  constructor() { }

  ngOnInit(): void {
  }

}
