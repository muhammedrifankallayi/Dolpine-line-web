import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TrustPoint {
    icon: string;
    title: string;
    description: string;
}

@Component({
    selector: 'app-trust-section',
    imports: [CommonModule],
    templateUrl: './trust-section.html',
    styleUrl: './trust-section.scss',
    standalone: true
})
export class TrustSection {
    trustPoints: TrustPoint[] = [
        {
            icon: 'groups',
            title: 'Professional Logistics Team',
            description: 'Experienced professionals dedicated to excellence in every shipment'
        },
        {
            icon: 'verified',
            title: 'Transparent Communication',
            description: 'Clear, honest updates at every stage of your cargo journey'
        },
        {
            icon: 'verified_user',
            title: 'Compliance-Focused Operations',
            description: 'Strict adherence to international standards and regulations'
        },
        {
            icon: 'location_on',
            title: 'Strategic UAE Presence',
            description: 'Prime location providing optimal access to global trade routes'
        },
        {
            icon: 'handshake',
            title: 'Client-Oriented Service Approach',
            description: 'Customized solutions tailored to your unique business needs'
        }
    ];
}
