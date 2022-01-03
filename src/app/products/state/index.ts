import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../products.model";

export interface ProductEntity extends EntityState<Product> {}

export interface State {
  products: ProductEntity;
}

export const StateKey = 'products';

export const selectProductsFeatureState = createFeatureSelector<State>(StateKey);

export const selectProductsState = createSelector(
  selectProductsFeatureState,
  (state) => state.products
)

export const adaptor: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product) => product.id,
  sortComparer: false
});

export const {
  selectAll
} = adaptor.getSelectors(selectProductsState)

export const selectAllProducts = selectAll;