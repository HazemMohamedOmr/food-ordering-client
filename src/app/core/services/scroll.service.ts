import { Injectable } from '@angular/core';
import { Router, Scroll, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) { }

  /**
   * Set up listeners for scroll restoration across different browsers
   */
  setupScrollRestoration(): void {
    // Listen for NavigationEnd events
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Slight delay to ensure DOM is updated before scrolling
        setTimeout(() => {
          this.viewportScroller.scrollToPosition([0, 0]);
        }, 100);
      });

    // Also handle scroll events directly
    this.router.events
      .pipe(filter(event => event instanceof Scroll))
      .subscribe((event: any) => {
        if (event.position) {
          // Backward navigation
          setTimeout(() => {
            this.viewportScroller.scrollToPosition(event.position);
          }, 0);
        } else if (event.anchor) {
          // Anchor navigation
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(event.anchor);
          }, 0);
        } else {
          // Forward navigation
          setTimeout(() => {
            this.viewportScroller.scrollToPosition([0, 0]);
          }, 0);
        }
      });
  }
} 