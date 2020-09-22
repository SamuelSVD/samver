import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tray-dir',
  templateUrl: './tray-dir.component.html',
  styleUrls: ['./tray-dir.component.css']
})
export class TrayDirComponent implements OnInit {
  VersionInfo = {'Version':'','URL':''};
  Program = { 'ProgramName':'TrayDir',
              'ShortDescription': 'TrayDir is a program intended for Windows use. Its main use is for situations where you would like quick access to a file on your drive without needing to open file explorer. You can esilty open a folder or run a file straight from the system tray. Small tasks like running cleanup scripts, running executables, or changing ip settings will be easily accessible right from the tray. This little tool will work as a shortcut to whatever you like!'};
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("assets/data/TrayDir.json").subscribe(data => {
      console.log(data);
      this.VersionInfo = (data as any);
    })
  }

}
