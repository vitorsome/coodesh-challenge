import { FilterService } from './../services/filter.service';
import { ClientsService } from './../services/clients.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-clients-listing',
  templateUrl: './clients-listing.component.html',
  styles: [`

  `]
})
export class ClientsListingComponent implements OnInit {
  clients: any[] = [];
  page: number = 1;

  constructor(private clientsService: ClientsService, private filterService :FilterService) {
    this.filterService.changeEmitted.subscribe(form => {
      this.onSubmitSearch(form);
    });
  }

  ngOnInit(): void {
    this.clientsService.getClients(this.page).subscribe((data :Client[]) => {
      this.clients = data;
    });
  }

  onSubmitSearch(search :any) {
    this.clients = this.clients.map((client :Client) => {
      client.hidden = false;
      if (search.search != '') {
        client.hidden = client.getName().indexOf(search.search) == -1;
      }
      return client;
    });
  }


}
