import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-charts-app';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    // console.log('bootstrapLink', document.getElementById('bootstrapLink'));
    // console.log('change', document.getElementById('bootstrapLink').setAttribute('href', 'assets/style.css'));
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    const perm = ["ADMIN", "EDITOR"];

    // this.permissionsService.loadPermissions(perm);

    // this.http.get('url').subscribe((permissions: any) => {
    //   const perm = ["ADMIN", "EDITOR"]; 
    //   this.permissionsService.loadPermissions(perm);
    // })
  }

 
}
