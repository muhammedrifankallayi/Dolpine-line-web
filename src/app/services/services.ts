import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
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
      title: 'Freight Forwarding',
      description: 'Comprehensive air, sea, and land freight services with end-to-end coordination and timely execution for seamless cargo movement.',
      icon: 'public',
      features: ['Air Freight', 'Sea Freight', 'Land Transport'],
      image: 'service/international-freight.jpg'
    },
    {
      title: 'Warehousing & Storage',
      description: 'Secure and flexible storage solutions aligned with UAE free zone logistics standards, providing safe custody and efficient inventory management.',
      icon: 'warehouse',
      features: ['Secure Storage', 'Inventory Mgmt', 'Distribution'],
      image: 'service/warehousing.png'
    },
    {
      title: 'Reverse Logistics',
      description: 'Comprehensive support for returned goods, including inspection, repacking, restocking, and redistribution to optimize your supply chain.',
      icon: 'recycling',
      features: ['Returns Management', 'Repacking', 'Restocking'],
      image: 'service/warehousing.png'
    },
    {
      title: 'Transportation & Distribution',
      description: 'Reliable transportation solutions for local and regional cargo movement with efficient last-mile delivery capabilities.',
      icon: 'local_shipping',
      features: ['Local Transport', 'Regional Delivery', 'Last Mile'],
      image: 'service/multi-modal-transport.png'
    },
    {
      title: 'Customs & Documentation',
      description: 'Expert customs clearance and comprehensive documentation support ensuring compliance and smooth import/export operations.',
      icon: 'description',
      features: ['Customs Clearance', 'Documentation', 'Compliance'],
      image: 'service/customs-clearance.png'
    },
    {
      title: 'NVOCC',
      description: 'Non-Vessel Operating Common Carrier services ensuring flexible and reliable scheduling for your cargo needs.',
      icon: 'package_2',
      features: ['Flexible Scheduling', 'Global Routes', 'Competitive Rates'],
      image: 'service/nvocc.png'
    },
    {
      title: 'Shipping Line Agency',
      description: 'Representing leading shipping lines to provide seamless connections to ports worldwide.',
      icon: 'anchor',
      features: ['Port Operations', 'Vessel Handling', 'Documentation'],
      image: 'service/shipping-line-agency.png'
    },
    {
      title: 'Multi Modal Transport',
      description: 'Integrated transport solutions combining rail, road, and sea for optimal efficiency and cost-effectiveness.',
      icon: 'hub',
      features: ['Rail', 'Road', 'Sea Integration'],
      image: 'service/multi-modal-transport.png'
    },
    {
      title: 'Third Party Logistics',
      description: 'End-to-end supply chain management and logistics outsourcing services tailored to your business needs.',
      icon: 'settings',
      features: ['Supply Chain', 'Inventory', 'Distribution'],
      image: 'service/third-party-logistics.png'
    },
    {
      title: 'LCL Consolidation',
      description: 'Cost-effective Less than Container Load solutions for smaller shipments with regular departures.',
      icon: 'inventory_2',
      features: ['Cost Effective', 'Flexible Volume', 'Regular Departures'],
      image: 'service/lcl-consolidation.jpg'
    },
    {
      title: 'Chartering',
      description: 'Customized chartering services for bulk, break-bulk, and oversized cargo requirements.',
      icon: 'flight',
      features: ['Air Charter', 'Sea Charter', 'Custom Solutions'],
      image: 'service/chartering.png'
    },
    {
      title: 'Break-bulk & RO-RO',
      description: 'Specialized handling for heavy lift, project cargo, and vehicle transport with expert care.',
      icon: 'directions_car',
      features: ['Heavy Lift', 'Vehicle Transport', 'Project Cargo'],
      image: 'service/break-bulk-roro.png'
    },
    {
      title: 'Project Cargo',
      description: 'Expert management of complex, heavy, and over-dimensional shipments for specialized projects.',
      icon: 'construction',
      features: ['Heavy Equipment', 'Engineering', 'Special Handling'],
      image: 'service/project-cargo.png'
    },
    {
      title: 'Packing & Removals',
      description: 'Professional packing and relocation services for businesses and individuals with full insurance coverage.',
      icon: 'move_to_inbox',
      features: ['Safe Packing', 'Relocation', 'Insurance'],
      image: 'service/packing-removal.jpg'
    },
    {
      title: 'Trading Consultancy',
      description: 'Expert advice on international trade regulations, compliance, and market strategies for business growth.',
      icon: 'business_center',
      features: ['Trade Advisory', 'Market Analysis', 'Compliance'],
      image: 'service/trading-consultancy.png'
    }
  ];
}
