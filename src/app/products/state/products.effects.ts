import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as fromProducts from ".";
import * as ProductsActions from '../actions';
import { ProductsService } from "../products.service";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class ProductEffects {

  constructor(private readonly actions$: Actions,
    private readonly productsService: ProductsService) {
  }
  
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      switchMap(action => {
        return this.productsService.getProducts().pipe(
          map(products => ProductsActions.loadProductsSuccess({ products })),
          catchError(err => of(ProductsActions.loadProductsError()))
        )
      })
    )
  });

  addProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.addProduct),
      switchMap(action => { // Suppose to call BE
        return of(ProductsActions.addProductSuccess( { product: action.product } ))
      })
    )
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.deleteProduct),
      switchMap(action => { // Suppose to call BE
        return of(ProductsActions.deleteProductSuccess( { id: action.id } ))
      })
    )
  });

}
