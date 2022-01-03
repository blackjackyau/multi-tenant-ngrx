import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tenant } from "../model/tenant";
import { Product } from "./products.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getProducts(tenant: Tenant): Observable<Product[]> {
    return this.http.get<Product[]>(`mock-data/${tenant.key}-products.json`);
  }
}