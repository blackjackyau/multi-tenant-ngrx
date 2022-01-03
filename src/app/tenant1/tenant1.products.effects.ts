import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { addProductEffect, deleteProductEffect, loadProductsEffect } from "../products/state/products.effects.common";
import { Tenant1 } from "../model/tenant";
import { ProductsService } from "../products/products.service";

@Injectable()
export class Tenant1ProductEffects {

  constructor(private readonly actions$: Actions,
    private readonly productsService: ProductsService) {
  }
  
  loadProducts$ = loadProductsEffect(Tenant1, this.actions$, this.productsService);

  addProduct$ = addProductEffect(Tenant1, this.actions$, this.productsService);

  deleteProduct$ = deleteProductEffect(Tenant1, this.actions$, this.productsService);

}
