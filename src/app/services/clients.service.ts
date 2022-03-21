import { ClientsServer } from 'src/app/interfaces/client-server';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private url = 'https://randomuser.me/api/';
  private returnFields = ['picture', 'name', 'email', 'gender',  'dob', 'phone', 'nat', 'location', 'id'];

  constructor(private http: HttpClient) {}

  getClients(){
    return this.http.get<ClientsServer>(this.url, {params:this.queryString(this.returnFields)}).pipe(
      map((resultApi :ClientsServer) => {
        return resultApi.results.map((client) => {
          return new Client(
            client.id.value,`${client.name.title}. ${client.name.first} ${client.name.last}`,client.email,
            client.gender,client.dob.date,client.phone,
            client.nat, client.location.street.name);
        })
      }),
      catchError( error => {
        return throwError(() => new Error(error));
      })
    );
  }

  private queryString(queryArray: string[]) :HttpParams {
    return new HttpParams({fromString:`inc=${queryArray.join()}`});
  }
}
