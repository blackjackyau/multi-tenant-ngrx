import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";
import { Tenant } from "src/app/model/tenant";
import { Product } from "../products.model";

export interface ProductEntity extends EntityState<Product> { }

export interface State {
  products: ProductEntity;
}

export const StateKey = 'products';

interface BaseState {
  [StateKey]: State
}

export const adaptor: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product) => product.id,
  sortComparer: false
});

export class ProductsSelector {

  selectProductEntityState: MemoizedSelector<object, ProductEntity, DefaultProjectorFn<ProductEntity>>;

  selectAllProducts: (state: object) => Product[];

  constructor(tenant: Tenant) {

    const selectBaseState = createFeatureSelector<BaseState>(tenant.key);

    const selectProductsState = createSelector(
      selectBaseState,
      (state) => state.products
    );

    this.selectProductEntityState = createSelector(
      selectProductsState,
      (state) => state.products
    )

    const {
      selectAll
    } = adaptor.getSelectors(this.selectProductEntityState)

    this.selectAllProducts = selectAll;
  }

  private static readonly objectPool: { [key: string]: ProductsSelector } = {};

  static for(tenant: Tenant): ProductsSelector {
    if (!ProductsSelector.objectPool[tenant.key]) {
      ProductsSelector.objectPool[tenant.key] = new ProductsSelector(tenant);
    }
    return ProductsSelector.objectPool[tenant.key];
  }
}