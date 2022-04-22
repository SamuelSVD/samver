import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-tray-dir',
  templateUrl: './tray-dir.component.html',
  styleUrls: ['./tray-dir.component.css']
})
export class TrayDirComponent implements OnInit {
  VersionInfo = {'Version':'','URL':''};
  Program = { 'ProgramName':'TrayDir',
              'ShortDescription': 'TrayDir is a program that provides easy access to files, folders, and programs directly from the system tray. With TrayDir you can quickly open a folder, click on a shortcut, or run a script straight from the system tray. Clear your desktop, or access commonly used items easily by accessing them from your system tray!'};
  constructor(private httpClient: HttpClient, private meta:Meta) { }

  ngOnInit() {
    this.httpClient.get("https://api.github.com/repos/SamuelSVD/TrayDir/releases/latest").subscribe(data => {
      console.log(data);
      var git = data as any;
      this.VersionInfo.Version = git.tag_name;
      this.VersionInfo.URL = git.assets[0].browser_download_url;
    });
    this.meta.addTag({
      title: 'Download TrayDir - samver.ca',
      description: 'TrayDir provides quick access to files, folders, and programs directly from the system tray. It is a flexible application with easy customization to meet your personal needs.'
    });
  }

}
