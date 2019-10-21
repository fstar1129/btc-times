import {map, startWith} from 'rxjs/operators';
import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import * as $ from 'jquery';
import {ROUTES_CONFIG} from '../../../configs/routes.config';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  constructor(){

  }

  ngOnInit() {
    
  }

  showSearchForm() {
    if ($("#search-input").hasClass("js-open")) {
      $("#search-input").removeClass("js-open");
    } else {
      $("#search-input").addClass("js-open");
    }
    $("#searchquery").val("");

    setTimeout(function() { $('#searchquery').focus() }, 500);
  }

}
