import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/data/TrayDir.json';
@Component({
  selector: 'app-tray-dir',
  templateUrl: './tray-dir.component.html',
  styleUrls: ['./tray-dir.component.css']
})
export class TrayDirComponent implements OnInit {
  VersionInfo = (data as any).default;
  constructor() { }

  ngOnInit() {
  }

}
