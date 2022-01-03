import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tenant1, Tenant2, Tenant3 } from './model/tenant';

const routes: Routes = [
  { path: `${Tenant1.key}`, data: { tenant: Tenant1 }, loadChildren: () => import('./tenant1/tenant1.module').then(m => m.Tenant1Module) },
  { path: `${Tenant2.key}`, data: { tenant: Tenant2 }, loadChildren: () => import('./tenant2/tenant2.module').then(m => m.Tenant2Module) },
  { path: `${Tenant3.key}`, data: { tenant: Tenant3 }, loadChildren: () => import('./tenant3/tenant3.module').then(m => m.Tenant3Module) },
  { path: '**', redirectTo: `${Tenant1.key}` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
