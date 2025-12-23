import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            const video = document.querySelector('#hero-video') as HTMLVideoElement;
            if (video) {
                video.muted = true;
                video.play().catch(error => {
                    console.log('Video autoplay failed:', error);
                    // Retry after a short delay
                    setTimeout(() => {
                        video.play().catch(e => console.log('Retry failed:', e));
                    }, 1000);
                });
            }
        }
    }
}
