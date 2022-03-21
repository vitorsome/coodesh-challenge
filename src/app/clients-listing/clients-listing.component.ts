import { ClientsServer, Result } from './../interfaces/client-server';
import { ClientsService } from './../services/clients.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-clients-listing',
  templateUrl: './clients-listing.component.html',
  styleUrls: ['./clients-listing.component.scss']
})
export class ClientsListingComponent implements OnInit {

  clients: any[] = [];

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsService.getClients().subscribe((data :Client[]) => {
      this.clients = data;
    });
  }

}
