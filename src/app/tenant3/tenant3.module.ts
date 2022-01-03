import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { Tenant3 } from "../model/tenant";
import { ProductsComponent } from "../products/products.component";
import { baseReducer } from "../state";
import { Tenant3ProductEffects } from "./tenant3.products.effects";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: 'products' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature(Tenant3.key, baseReducer(Tenant3)),
    EffectsModule.forFeature([Tenant3ProductEffects])
  ]
})
export class Tenant3Module {}