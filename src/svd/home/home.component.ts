import { StyleService } from '../services/style-service/style.service';
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
      this.lines = (data as any).Lines;
    })
  }
  fun() {
    this.styleService.applyTheme('random');
  }
}
