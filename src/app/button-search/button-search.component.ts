import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-search',
  templateUrl: './button-search.component.html',
  styleUrls: ['./button-search.component.scss']
})
export class ButtonSearchComponent implements OnInit {
  @Input() label :string = 'Button';

  constructor() { }

  ngOnInit(): void {
  }

}
