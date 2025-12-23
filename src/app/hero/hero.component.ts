import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
    ngAfterViewInit() {
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
