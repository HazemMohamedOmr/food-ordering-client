import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { CartService } from './core/services/cart.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule, SharedModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isMenuCollapsed = true;
  currentYear = new Date().getFullYear();
  isScrolled = false;
  
  constructor(
    public authService: AuthService,
    public cartService: CartService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.checkScroll();
    
    // Initialize AOS (Animate On Scroll)
    if (typeof window !== 'undefined') {
      import('aos').then(module => {
        const AOS = module.default;
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease',
        });
      });
    }
    
    // Set initial body class
    this.updateBodyClass();
    
    // Listen for route changes to update body class
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateBodyClass();
    });
  }

  private updateBodyClass(): void {
    if (this.isHomePage()) {
      this.renderer.addClass(document.body, 'has-hero-section');
    } else {
      this.renderer.removeClass(document.body, 'has-hero-section');
    }
  }
  
  @HostListener('window:scroll', [])
  checkScroll() {
    this.isScrolled = window.pageYOffset > 100;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Check if the current page is home or restaurant pages
  isHomePage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/' || 
           currentUrl === '/home' || 
           currentUrl.startsWith('/restaurants');
  }
}
