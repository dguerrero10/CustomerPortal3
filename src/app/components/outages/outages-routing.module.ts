import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutagesComponent } from './outages/outages.component';


const routes: Routes = [
  {
    path: '',
    component: OutagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutagesRoutingModule { }
