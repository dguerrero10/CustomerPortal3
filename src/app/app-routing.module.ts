import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../app/components/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'pay-my-bill',
    loadChildren: () => import('../app/components/pay-my-bill/pay-my-bill.module').then(mod => mod.PayMyBillModule)
  },
  {
    path: 'usage',
    loadChildren: () => import('../app/components/usage/usage.module').then(mod => mod.UsageModule)
  },
  {
    path: 'outages',
    loadChildren: () => import('../app/components/outages/outages.module').then(mod => mod.OutagesModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('../app/components/my-account/my-account.module').then(mod => mod.MyAccountModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/components/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('../app/components/sign-up/sign-up.module').then(mod => mod.SignUpModule)
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
