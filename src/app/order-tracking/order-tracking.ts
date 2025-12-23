import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TrackingEvent {
  date: string;
  time: string;
  status: string;
  location: string;
  completed: boolean;
  icon: string;
}

interface ShipmentDetails {
  id: string;
  from: string;
  to: string;
  weight: string;
  pieces: number;
  expectedDelivery: string;
  currentStatus: string;
}

@Component({
  selector: 'app-order-tracking',
  imports: [CommonModule, FormsModule],
  templateUrl: './order-tracking.html',
  styleUrl: './order-tracking.scss',
})
export class OrderTracking {
  trackingId = signal('');
  isSearching = signal(false);
  shipmentFound = signal(false);

  shipment: ShipmentDetails | null = null;
  timeline: TrackingEvent[] = [];

  searchShipment() {
    if (!this.trackingId()) return;

    this.isSearching.set(true);

    // Simulate API call
    setTimeout(() => {
      this.isSearching.set(false);
      this.shipmentFound.set(true);

      // Mock Data
      this.shipment = {
        id: this.trackingId(),
        from: 'Jebel Ali Port, UAE',
        to: 'Rotterdam, Netherlands',
        weight: '4,500 KG',
        pieces: 24,
        expectedDelivery: 'Dec 28, 2025',
        currentStatus: 'In Transit'
      };

      this.timeline = [
        {
          date: 'Dec 23, 2025',
          time: '09:30 AM',
          status: 'Departed from Facility',
          location: 'Jebel Ali Port, UAE',
          completed: true,
          icon: 'sailing'
        },
        {
          date: 'Dec 22, 2025',
          time: '04:15 PM',
          status: 'Processed at Facility',
          location: 'Jebel Ali Free Zone',
          completed: true,
          icon: 'inventory_2'
        },
        {
          date: 'Dec 22, 2025',
          time: '11:00 AM',
          status: 'Shipment Created',
          location: 'Dubai, UAE',
          completed: true,
          icon: 'add_box'
        },
        {
          date: 'Dec 28, 2025',
          time: 'Est. 10:00 AM',
          status: 'Arrival at Destination',
          location: 'Rotterdam, Netherlands',
          completed: false,
          icon: 'anchor'
        }
      ];
    }, 1500);
  }
}

