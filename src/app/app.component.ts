import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  sideMenus = [
    {
      label: 'Product',
      link: 'products',
      icon: 'work'
    }
  ];

  mobileQuery: MediaQueryList;

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

  logout() {
  }


}