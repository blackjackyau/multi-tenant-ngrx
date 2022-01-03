import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as ProductsActions from '../products/actions';
import { ProductsSelector } from './state';
import { Product } from './products.model';
import { ActivatedRoute } from '@angular/router';
import { Default, Tenant } from '../model/tenant';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] | undefined = undefined;

  tenant: Tenant = Default;

  constructor(private readonly store: Store, private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ tenant }) => {
      this.tenant = tenant;
      console.log('tenant', tenant);
      this.store.dispatch(ProductsActions.loadProducts(tenant)());
      this.store.pipe(select(ProductsSelector.for(tenant).selectAllProducts)).subscribe(products => this.products = products);
    });

  }

  getRandomInt(min: number, max: number) {
    const _min = Math.ceil(min);
    const _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min) + _min);
  }

  add() {
    const id = this.getRandomInt(3, 10000);
    this.store.dispatch(ProductsActions.addProduct(this.tenant)({ product: { id, name: `[${this.tenant.key}] Product ${id}` }}));
  }

  delete(id: number) {
    this.store.dispatch(ProductsActions.deleteProduct(this.tenant)({ id }));
  }
}
