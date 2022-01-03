import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProductsService } from './products.service';
import * as ProductsActions from '../products/actions';
import { selectAllProducts } from './state';
import { Product } from './products.model';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] | undefined = undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(ProductsActions.loadProducts());
    this.store.pipe(select(selectAllProducts)).subscribe(products => this.products = products);
  }

  getRandomInt(min: number, max: number) {
    const _min = Math.ceil(min);
    const _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min) + _min); //The maximum is exclusive and the minimum is inclusive
  }

  add() {
    const id = this.getRandomInt(3, 10000);
    this.store.dispatch(ProductsActions.addProduct({ product: { id, name: `Product ${id}` }}));
  }

  delete(id: number) {
    this.store.dispatch(ProductsActions.deleteProduct({ id }));
  }
}
