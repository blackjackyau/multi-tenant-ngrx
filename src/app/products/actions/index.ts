import { createAction, props } from "@ngrx/store";
import { Tenant } from "src/app/model/tenant";
import { Product } from "../products.model";

const loadProducts = (tenant: Tenant) => createAction(`${tenant.key}:[Products] Load Products`);

const loadProductsSuccess = (tenant: Tenant) => createAction(`${tenant.key}:[Products] Load Products Success`, props<{ products: Product[] }>());

const loadProductsError = (tenant: Tenant) => createAction(`${tenant.key}:[Products] Load Products Error`);

const addProduct = (tenant: Tenant) => createAction(`${tenant.key}:[Products] Add Product`, props<{ product: Product }>());

const addProductSuccess = (tenant: Tenant) => createAction(`${tenant.key}:[Products] Add Product Success`, props<{ product: Product }>());

const addProductError = (tenant: Tenant) => createAction(`${tenant.key}:[Products] Add Product Error`);

const deleteProduct = (tenant: Tenant) => createAction(`${tenant.key}:[Products] Delete Product`, props<{ id: number }>());

const deleteProductSuccess = (tenant: Tenant) => createAction(`${tenant.key}:[Products] Delete Product Success`, props<{ id: number }>());

const deleteProductError = (tenant: Tenant) => createAction(`${tenant.key}:[Products] Delete Product Error`);

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