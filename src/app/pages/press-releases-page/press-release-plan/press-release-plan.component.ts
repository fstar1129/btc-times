import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-press-release-plan',
  templateUrl: './press-release-plan.component.html',
  styleUrls: ['./press-release-plan.component.scss']
})
export class PressReleasePlanComponent implements OnInit {

  @Input() type: string;
  constructor() { }

  ngOnInit() {
  }

}
