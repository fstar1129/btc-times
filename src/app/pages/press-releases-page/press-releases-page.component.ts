import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press-releases-page',
  templateUrl: './press-releases-page.component.html',
  styleUrls: ['./press-releases-page.component.scss']
})
export class PressReleasesPageComponent implements OnInit {

  fileName: string = '';

  constructor() { }

  ngOnInit() {
  }

  onFileChange (event: any) {
    let files = event.target.files;
    this.fileName = files[0].name;
    console.log(this.fileName);
  }
}
