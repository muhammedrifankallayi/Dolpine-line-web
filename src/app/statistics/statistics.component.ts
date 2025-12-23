import { Component, OnInit, Inject, PLATFORM_ID, signal, effect } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-statistics',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
    private observer?: IntersectionObserver;
    private hasAnimated = false;

    stats = signal([
        {
            value: 0,
            target: 2500000,
            label: 'Packages Delivered',
            suffix: 'M+',
            displayValue: '0'
        },
        {
            value: 0,
            target: 120,
            label: 'Countries Served',
            suffix: '+',
            displayValue: '0'
        },
        {
            value: 0,
            target: 99.9,
            label: 'On-Time Delivery',
            suffix: '%',
            displayValue: '0'
        },
        {
            value: 0,
            target: 24,
            label: 'Support',
            suffix: '/7',
            displayValue: '0'
        }
    ]);

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.setupIntersectionObserver();
        }
    }

    private setupIntersectionObserver() {
        const options = {
            root: null,
            threshold: 0.5,
            rootMargin: '0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.hasAnimated = true;
                    this.animateCounters();
                }
            });
        }, options);

        const element = document.querySelector('.statistics-section');
        if (element) {
            this.observer.observe(element);
        }
    }

    private animateCounters() {
        const duration = 2500;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);

        this.stats().forEach((stat, index) => {
            let frame = 0;
            const counter = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentValue = stat.target * easeOutQuart;

                this.stats.update(stats => {
                    const newStats = [...stats];
                    newStats[index] = {
                        ...stat,
                        value: currentValue,
                        displayValue: this.formatNumber(currentValue, index)
                    };
                    return newStats;
                });

                if (frame === totalFrames) {
                    clearInterval(counter);
                    // Ensure final value is exact
                    this.stats.update(stats => {
                        const newStats = [...stats];
                        newStats[index] = {
                            ...stat,
                            value: stat.target,
                            displayValue: this.formatNumber(stat.target, index)
                        };
                        return newStats;
                    });
                }
            }, frameDuration);
        });
    }

    private formatNumber(value: number, index: number): string {
        if (index === 0) {
            // Packages: format as 2.5M+
            return (value / 1000000).toFixed(1);
        } else if (index === 2) {
            // Percentage: format as 99.9%
            return value.toFixed(1);
        } else {
            // Others: format as whole number
            return Math.round(value).toString();
        }
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
