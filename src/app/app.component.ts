import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { CartService } from './core/services/cart.service';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkScroll();
    // Initialize AOS (Animate On Scroll)
    if (typeof window !== 'undefined') {
      import('aos').then(aos => {
        aos.init({
          duration: 1000,
          once: true,
          easing: 'ease',
        });
      });
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
