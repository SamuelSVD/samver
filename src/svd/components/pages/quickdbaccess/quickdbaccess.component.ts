import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-quickdbaccess',
  templateUrl: './quickdbaccess.component.html',
  styleUrls: ['./quickdbaccess.component.css']
})
export class QuickDBAccessComponent implements OnInit {
  VersionInfo = {'Version':'','URL':''};
  Program = { 'ProgramName':'Quick DB Access',
              'ShortDescription': 'Quick DB Access is a Windows program that works as a configurable front end application for a SQL Server database.'};
  constructor(private httpClient: HttpClient, private meta:Meta) { }

  ngOnInit(): void {
    this.httpClient.get("https://api.github.com/repos/SamuelSVD/QuickDBAccess/releases/latest").subscribe(data => {
      console.log(data);
      var git = data as any;
      this.VersionInfo.Version = git.tag_name;
      this.VersionInfo.URL = git.assets[0].browser_download_url;
    });
    this.meta.addTag({
      title: 'Download Quick DB Access - samver.ca',
      description: 'Quick DB Access is a Windows program that works as a configurable front end application for a SQL Server database.'
    });
  }

}
