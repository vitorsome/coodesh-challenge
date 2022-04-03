import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'client-details-modal',
  templateUrl: './client-details-modal.component.html',
  styleUrls: ['./client-details-modal.component.scss']
})
export class ClientDetailsModalComponent implements OnInit {

  public client? :Client;

  constructor() { }

  ngOnInit(): void {}

}
