import { createAction, props } from "@ngrx/store";
import { Product } from "../products.model";

const loadProducts = createAction('[Products] Load Products');

const loadProductsSuccess = createAction('[Products] Load Products Success', props<{ products: Product[] }>());

const loadProductsError = createAction('[Products] Load Products Error');

const addProduct = createAction('[Products] Add Product', props<{ product: Product }>());

const addProductSuccess = createAction('[Products] Add Product Success', props<{ product: Product }>());

const addProductError = createAction('[Products] Add Product Error');

const deleteProduct = createAction('[Products] Delete Product', props<{ id: number }>());

const deleteProductSuccess = createAction('[Products] Delete Product Success', props<{ id: number }>());

const deleteProductError = createAction('[Products] Delete Product Error');

export {
  loadProducts,
  loadProductsSuccess,
  loadProductsError,
  addProduct,
  addProductSuccess,
  addProductError,
  deleteProduct,
  deleteProductSuccess,
  deleteProductError
}