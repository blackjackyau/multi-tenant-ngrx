import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { Tenant1 } from "../model/tenant";
import { ProductsComponent } from "../products/products.component";
import { baseReducer } from "../state";
import { Tenant1ProductEffects } from "./tenant1.products.effects";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: 'products' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature(Tenant1.key, baseReducer(Tenant1)),
    EffectsModule.forFeature([Tenant1ProductEffects])
  ]
})
export class Tenant1Module {}