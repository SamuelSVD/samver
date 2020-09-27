import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'svd-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  clicked: boolean = false;
  constructor(private elementRef: ElementRef) { }
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.elementRef.nativeElement.contains(event.target)) {
      this.clicked = false;
    }
  }
  ngOnInit(): void {
  }
  fun() {
    this.clicked = !this.clicked;

  }

}
