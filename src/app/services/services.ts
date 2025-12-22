import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  selectedService: Service | null = null;

  services: Service[] = [
    {
      title: 'NVOCC',
      description: 'Non-Vessel Operating Common Carrier services ensuring flexible and reliable scheduling for your cargo needs.',
      icon: 'package_2',
      features: ['Flexible Scheduling', 'Global Routes', 'Competitive Rates']
    },
    {
      title: 'Shipping Line Agency',
      description: 'Representing leading shipping lines to provide seamless connections to ports worldwide.',
      icon: 'anchor',
      features: ['Port Operations', 'Vessel Handling', 'Documentation']
    },
    {
      title: 'International Freight',
      description: 'Comprehensive sea, air, and land freight solutions tailored to your specific requirements.',
      icon: 'public',
      features: ['Sea Freight', 'Air Freight', 'Land Transport']
    },
    {
      title: 'Multi Modal Transport',
      description: 'Integrated transport solutions combining rail, road, and sea for optimal efficiency.',
      icon: 'local_shipping',
      features: ['Rail', 'Road', 'Sea Integration']
    },
    {
      title: 'LCL Consolidation',
      description: 'Cost-effective Less than Container Load solutions for smaller shipments.',
      icon: 'inventory_2',
      features: ['Cost Effective', 'Flexible Volume', 'Regular Departures']
    },
    {
      title: 'Third Party Logistics',
      description: 'End-to-end supply chain management and logistics outsourcing services.',
      icon: 'hub',
      features: ['Supply Chain', 'Inventory', 'Distribution']
    },
    {
      title: 'Warehousing',
      description: 'Secure storage and efficient distribution networks aimed at speed and safety.',
      icon: 'warehouse',
      features: ['Secure Storage', 'Inventory Mgmt', 'Distribution']
    },
    {
      title: 'Chartering',
      description: 'Customized chartering services for bulk, break-bulk, and oversized cargo.',
      icon: 'flight',
      features: ['Air Charter', 'Sea Charter', 'Custom Solutions']
    },
    {
      title: 'Break-bulk & RO-RO',
      description: 'Specialized handling for heavy lift, project cargo, and vehicle transport.',
      icon: 'directions_car',
      features: ['Heavy Lift', 'Vehicle Transport', 'Project Cargo']
    },
    {
      title: 'Project Cargo',
      description: 'Expert management of complex, heavy, and over-dimensional shipments.',
      icon: 'construction',
      features: ['Heavy Equipment', 'Engineering', 'Special Handling']
    },
    {
      title: 'Customs Clearance',
      description: 'Hassle-free customs compliance and documentation services for smooth operations.',
      icon: 'description',
      features: ['Documentation', 'Compliance', 'Fast Processing']
    },
    {
      title: 'Packing & Removals',
      description: 'Professional packing and relocation services for businesses and individuals.',
      icon: 'move_to_inbox',
      features: ['Safe Packing', 'Relocation', 'Insurance']
    },
    {
      title: 'Trading Consultancy',
      description: 'Expert advice on international trade regulations and market strategies.',
      icon: 'business_center',
      features: ['Trade Advisory', 'Market Analysis', 'Compliance']
    }
  ];
}
