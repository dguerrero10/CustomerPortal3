import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';


const routes: Routes = [
  {
    path: '',
    component: AccountInfoComponent,
  },
  {
    path: 'personal-info',
    component: PersonalInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
