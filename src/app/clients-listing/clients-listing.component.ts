import { PaginationService } from './../services/pagination.service';
import { FilterService } from './../services/filter.service';
import { ClientsService } from './../services/clients.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ClientDetailsModalComponent } from '../client-details-modal/client-details-modal.component';

@Component({
  selector: 'app-clients-listing',
  templateUrl: './clients-listing.component.html',
  styles: [``]
})
export class ClientsListingComponent implements OnInit {
  clients: any[] = [];
  page: number = 1;
  loading :boolean = false;

  constructor(
    private clientsService: ClientsService,
    private filterService :FilterService,
    private paginationService :PaginationService) {
    this.filterService.changeEmitted.subscribe(form => {
      this.onSubmitSearch(form);
    });

    this.paginationService.changeEmitted.subscribe(page => {
      this.page += Number(page);
      if (this.page <= 0) {
        this.page = 1;
        return;
      }
      this.getApiClients();
    });
  }

  ngOnInit(): void {
    this.getApiClients();
  }

  getApiClients() {
    this.loading = true;
    this.clientsService.getClients(this.page).subscribe((data :Client[]) => {
      this.clients = data;
      this.loading = false;
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

  clientDetails() {

  }


}
