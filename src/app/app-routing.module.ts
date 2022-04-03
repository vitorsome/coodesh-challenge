import { ClientsListingComponent } from './clients-listing/clients-listing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'clients', pathMatch:'full'},
  {path: 'clients', component: ClientsListingComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
