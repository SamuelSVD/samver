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
              'ShortDescription': 'TrayDir is a program intended for Windows 10 use. Its main function is to provide easy access to files, folders, programs, or scripts directly from the system tray. With TrayDir you can quickly open a folder click on a shortcut, or run a script straight from the system tray. This little tool can work as a shortcut to anything!'};
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("https://api.github.com/repos/SamuelSVD/TrayDir/releases/latest").subscribe(data => {
      console.log(data);
      var git = data as any;
      this.VersionInfo.Version = git.tag_name;
      this.VersionInfo.URL = git.assets[0].browser_download_url;
    })
  }

}
