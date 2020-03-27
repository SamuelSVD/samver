import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tray-dir',
  templateUrl: './tray-dir.component.html',
  styleUrls: ['./tray-dir.component.css']
})
export class TrayDirComponent implements OnInit {
  VersionInfo = {'Version':'','URL':''};
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("assets/data/TrayDir.json").subscribe(data => {
      console.log(data);
      this.VersionInfo = (data as any);
    })
  }

}
