import { PaginationService } from './../services/pagination.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() page? :number;

  constructor(private paginationService :PaginationService) { }

  ngOnInit(): void {
  }

  changePage(event :any) {
    event.preventDefault();
    this.paginationService.emitPage(+event.target.getAttribute('data-id'));
  }

}
