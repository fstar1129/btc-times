import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advertise-formats-item',
  templateUrl: './advertise-formats-item.component.html',
  styleUrls: ['./advertise-formats-item.component.scss']
})
export class AdvertiseFormatsItemComponent implements OnInit {

  @Input() even: boolean;

  constructor() { }

  ngOnInit() {
    
  }

}
