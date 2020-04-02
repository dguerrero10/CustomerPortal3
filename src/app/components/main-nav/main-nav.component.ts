import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavbarService } from '../shared-services/navbar.service';
import { Router,
         Event,
         NavigationCancel,
         NavigationEnd,
         NavigationStart,
         NavigationError,
        } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  loading = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              public navbarService: NavbarService) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit() {
    this.navbarService.show();
  }
  logout() {
    this.navbarService.hide();
    this.router.navigate(['/login']);
  }
}

// ngOnInit() {
//   this.navbarService.show();
// }

// mobileQuery: MediaQueryList;

// private _mobileQueryListener: () => void;

// constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public navbarService: NavbarService) {
//   this.mobileQuery = media.matchMedia('(max-width: 600px)');
//   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
//   this.mobileQuery.addListener(this._mobileQueryListener);
//   }
// }