import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { Tenant, Tenant1, Tenant2, Tenant3 } from './model/tenant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private _sideMenus = [
    {
      label: 'Product',
      link: 'products',
      icon: 'work'
    }
  ];

  mobileQuery: MediaQueryList;

  tenant1 = Tenant1;
  tenant2 = Tenant2;
  tenant3 = Tenant3;

  private mobileQueryListener: () => void;

  constructor(private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) { 
      this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
      this.mobileQueryListener = () => {
        this.changeDetectorRef.detectChanges();
      };
      this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }

  sideMenus(tenant: Tenant) {
    return this._sideMenus.map(menu => {
      return {
        ... menu,
        link: `${tenant.key}/${menu.link}`
      }
    });
  }

  logout() {
  }


}