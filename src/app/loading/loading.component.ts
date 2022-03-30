import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'loading-spinner',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input() loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
