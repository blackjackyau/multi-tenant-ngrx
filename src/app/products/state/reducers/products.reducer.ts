import { createReducer, on } from '@ngrx/store';
import * as ProductActions from '../../actions';
import { State, adaptor } from '../index';

const initialState: State = {
  products: adaptor.getInitialState()
};

export const productsReducer = createReducer<State>(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, { products }) => {
    const productState = adaptor.setAll(products, state.products);
    return {
      ... state,
      products: productState
    }
  }),
  on(ProductActions.addProductSuccess, (state, { product }) => {
    const productState = adaptor.addOne(product, state.products);
    return {
      ... state,
      products: productState
    }
  }),
  on(ProductActions.deleteProductSuccess, (state, { id }) => {
    const productState = adaptor.removeOne(id, state.products);
    return {
      ... state,
      products: productState
    }
  })
)