import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-layout',
  templateUrl: './manager-layout.component.html',
  styleUrls: ['./manager-layout.component.css']
})
export class ManagerLayoutComponent implements OnInit {

  today = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
