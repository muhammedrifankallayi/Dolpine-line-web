import { Component, signal, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Dolphin Line');

  isLoading = true;

  private serviceImages = [
    'service/nvocc.png',
    'service/shipping-line-agency.png',
    'service/international-freight.jpg',
    'service/multi-modal-transport.png',
    'service/lcl-consolidation.jpg',
    'service/third-party-logistics.png',
    'service/warehousing.png',
    'service/chartering.png',
    'service/break-bulk-roro.png',
    'service/project-cargo.png',
    'service/customs-clearance.png',
    'service/packing-removal.jpg',
    'service/trading-consultancy.png'
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.preloadResources();
  }

  private async preloadResources() {
    // Minimum loading time of 2 seconds
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 2000));

    // Only preload images in the browser
    if (isPlatformBrowser(this.platformId)) {
      const imageLoadPromises = this.serviceImages.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Continue even if one fails
        });
      });

      try {
        // Wait for both timer and images (with a timeout for images so they don't block forever)
        await Promise.all([
          minLoadTime,
          Promise.race([
            Promise.all(imageLoadPromises),
            new Promise(resolve => setTimeout(resolve, 5000)) // Max 5s wait for images
          ])
        ]);
      } finally {
        this.isLoading = false;
      }
    } else {
      // On server, just wait for minimum time
      await minLoadTime;
      this.isLoading = false;
    }
  }

  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
