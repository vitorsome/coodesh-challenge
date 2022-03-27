import { FilterService } from './../../services/filter.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {
  search: any
  constructor(private filterService :FilterService) { }

  ngOnInit(): void {
  }

  onSubmitSearch(form :any) {
    this.filterService.emitFilter(form);
  }

}
