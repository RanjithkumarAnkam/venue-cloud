import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor() { }
  otherStatus:boolean=false;
  ngOnInit() {
  }
  addProp(e) {
    this.otherStatus=e;
  }
}
