import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { addProductEffect, deleteProductEffect, loadProductsEffect } from "../products/state/products.effects.common";
import { Tenant3 } from "../model/tenant";
import { ProductsService } from "../products/products.service";

@Injectable()
export class Tenant3ProductEffects {

  constructor(private readonly actions$: Actions,
    private readonly productsService: ProductsService) {
  }
  
  loadProducts$ = loadProductsEffect(Tenant3, this.actions$, this.productsService);

  addProduct$ = addProductEffect(Tenant3, this.actions$, this.productsService);

  deleteProduct$ = deleteProductEffect(Tenant3, this.actions$, this.productsService);

}
