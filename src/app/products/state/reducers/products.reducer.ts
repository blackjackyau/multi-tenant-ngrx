import { createReducer, on } from '@ngrx/store';
import { Tenant } from 'src/app/model/tenant';
import * as ProductActions from '../../actions';
import { State, adaptor } from '../index';

const initialState: State = {
  products: adaptor.getInitialState()
};

export const productsReducer = (tenant: Tenant) => createReducer<State>(
  initialState,
  on(ProductActions.loadProductsSuccess(tenant), (state, { products }) => {
    const productState = adaptor.setAll(products, state.products);
    return {
      ... state,
      products: productState
    }
  }),
  on(ProductActions.addProductSuccess(tenant), (state, { product }) => {
    const productState = adaptor.addOne(product, state.products);
    return {
      ... state,
      products: productState
    }
  }),
  on(ProductActions.deleteProductSuccess(tenant), (state, { id }) => {
    const productState = adaptor.removeOne(id, state.products);
    return {
      ... state,
      products: productState
    }
  })
)