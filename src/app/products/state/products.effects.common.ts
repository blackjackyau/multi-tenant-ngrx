import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ProductsActions from '../actions';
import { ProductsService } from "../products.service";
import { catchError, map, of, switchMap } from "rxjs";
import { Tenant } from "src/app/model/tenant";

export const loadProductsEffect = (tenant: Tenant, actions$: Actions, productsService: ProductsService) => {
  return createEffect(() => {
    return actions$.pipe(
      ofType(ProductsActions.loadProducts(tenant)),
      switchMap(action => {
        return productsService.getProducts(tenant).pipe(
          map(products => ProductsActions.loadProductsSuccess(tenant)({ products })),
          catchError(err => of(ProductsActions.loadProductsError(tenant)()))
        )
      })
    )
  });
}

export const addProductEffect = (tenant: Tenant, actions$: Actions, productsService: ProductsService) => {
  return createEffect(() => {
    return actions$.pipe(
      ofType(ProductsActions.addProduct(tenant)),
      switchMap(action => { // Suppose to call BE
        return of(ProductsActions.addProductSuccess(tenant)({ product: action.product }))
      })
    );
  })
};


export const deleteProductEffect = (tenant: Tenant, actions$: Actions, productsService: ProductsService) => {
  return createEffect(() => {
    return actions$.pipe(
      ofType(ProductsActions.deleteProduct(tenant)),
      switchMap(action => { // Suppose to call BE
        return of(ProductsActions.deleteProductSuccess(tenant)({ id: action.id }))
      })
    );
  })
};