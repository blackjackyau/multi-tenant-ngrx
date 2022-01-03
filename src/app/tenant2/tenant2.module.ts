import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { Tenant2 } from "../model/tenant";
import { ProductsComponent } from "../products/products.component";
import { baseReducer } from "../state";
import { Tenant2ProductEffects } from "./tenant2.products.effects";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: 'products' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature(Tenant2.key, baseReducer(Tenant2)),
    EffectsModule.forFeature([Tenant2ProductEffects])
  ]
})
export class Tenant2Module {}