import { FilterService } from './services/filter.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { ClientsListingComponent } from './clients-listing/clients-listing.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { ButtonSearchComponent } from './button-search/button-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSearchComponent } from './clients-listing/form-search/form-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListingComponent,
    InputSearchComponent,
    ButtonSearchComponent,
    FormSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpClient, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
