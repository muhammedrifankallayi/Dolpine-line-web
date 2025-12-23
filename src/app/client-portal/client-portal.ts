import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ImportCharge {
    pod: string;
    name: string;
    unitType: string;
    currency: string;
    dc20Gen: string;
    hc40Gen: string;
    hc45Gen: string;
    dc20Haz: string;
    hc40Haz: string;
    hc45Haz: string;
}

interface ExportCharge {
    pol: string;
    name: string;
    unitType: string;
    currency: string;
    dc20Gen: string;
    hc40Gen: string;
    hc45Gen: string;
    dc20Haz: string;
    hc40Haz: string;
    hc45Haz: string;
}

@Component({
    selector: 'app-client-portal',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './client-portal.html',
    styleUrl: './client-portal.scss',
})
export class ClientPortal {
    activeTab: 'import' | 'export' = 'import';

    importCharges: ImportCharge[] = [
        {
            pod: 'AEJEA',
            name: 'DELIVERY ORDER CHARGES',
            unitType: 'PER DOCUMENT',
            currency: 'AED',
            dc20Gen: 'AED 575',
            hc40Gen: 'AED 575',
            hc45Gen: 'AED 575',
            dc20Haz: 'AED 575',
            hc40Haz: 'AED 575',
            hc45Haz: 'AED 575'
        },
        {
            pod: 'AEJEA',
            name: 'IMPORT THC',
            unitType: 'PER CONTAINER',
            currency: 'AED',
            dc20Gen: 'AED 770',
            hc40Gen: 'AED 1,200',
            hc45Gen: 'AED 1,200',
            dc20Haz: 'AED 1,155',
            hc40Haz: 'AED 1,800',
            hc45Haz: 'AED 1,800'
        },
        {
            pod: 'AEJEA',
            name: 'CONTAINER SEAL CHARGES',
            unitType: 'PER CONTAINER',
            currency: 'AED',
            dc20Gen: 'AED 25',
            hc40Gen: 'AED 25',
            hc45Gen: 'AED 25',
            dc20Haz: 'AED 25',
            hc40Haz: 'AED 25',
            hc45Haz: 'AED 25'
        },
        {
            pod: 'AEJEA',
            name: 'ISPS CHARGES',
            unitType: 'PER CONTAINER',
            currency: 'AED',
            dc20Gen: 'AED 75',
            hc40Gen: 'AED 75',
            hc45Gen: 'AED 75',
            dc20Haz: 'AED 75',
            hc40Haz: 'AED 75',
            hc45Haz: 'AED 75'
        },
        {
            pod: 'AEJEA',
            name: 'CONTAINER WASHING CHARGES',
            unitType: 'PER CONTAINER',
            currency: 'AED',
            dc20Gen: 'AED 200',
            hc40Gen: 'AED 300',
            hc45Gen: 'AED 300',
            dc20Haz: 'AED 200',
            hc40Haz: 'AED 300',
            hc45Haz: 'AED 300'
        },
        {
            pod: 'AEJEA',
            name: 'PORT SECURITY',
            unitType: 'PER CONTAINER',
            currency: 'AED',
            dc20Gen: 'AED 50',
            hc40Gen: 'AED 50',
            hc45Gen: 'AED 50',
            dc20Haz: 'AED 50',
            hc40Haz: 'AED 50',
            hc45Haz: 'AED 50'
        },
        {
            pod: 'AEJEA',
            name: 'EQUIPMENT MAINTENANCE CHARGES',
            unitType: 'PER CONTAINER',
            currency: 'AED',
            dc20Gen: 'AED 125',
            hc40Gen: 'AED 125',
            hc45Gen: 'AED 125',
            dc20Haz: 'AED 125',
            hc40Haz: 'AED 125',
            hc45Haz: 'AED 125'
        },
        {
            pod: 'AEJEA',
            name: 'ADMIN CHARGES',
            unitType: 'PER CONTAINER',
            currency: 'AED',
            dc20Gen: 'AED 5',
            hc40Gen: 'AED 5',
            hc45Gen: 'AED 5',
            dc20Haz: 'AED 5',
            hc40Haz: 'AED 5',
            hc45Haz: 'AED 5'
        },
        {
            pod: 'AEJEA',
            name: 'INSPECTION CHARGES',
            unitType: 'PER CONTAINER',
            currency: 'AED',
            dc20Gen: 'AED 25',
            hc40Gen: 'AED 25',
            hc45Gen: 'AED 25',
            dc20Haz: 'AED 25',
            hc40Haz: 'AED 25',
            hc45Haz: 'AED 25'
        }
    ];

    exportCharges: ExportCharge[] = [
        {
            pol: 'AEJEA',
            name: 'B/L CHARGES',
            unitType: 'PER DOCUMENT',
            currency: 'AED',
            dc20Gen: 'AED 575',
            hc40Gen: 'AED 575',
            hc45Gen: 'AED 575',
            dc20Haz: 'AED 575',
            hc40Haz: 'AED 575',
            hc45Haz: 'AED 575'
        },
        {
            pol: 'AEJEA',
            name: 'EXPORT THC',
            unitType: 'PER CONTAINER',
            currency: 'AED',
            dc20Gen: 'AED 1,090',
            hc40Gen: 'AED 1,520',
            hc45Gen: 'AED 1,520',
            dc20Haz: 'AED 1,635',
            hc40Haz: 'AED 2,280',
            hc45Haz: 'AED 2,280'
        },
        {
            pol: 'AEJEA',
            name: 'CONTAINER SEAL CHARGES',
            unitType: 'PER CONTAINER',
            currency: 'AED',
            dc20Gen: 'AED 30',
            hc40Gen: 'AED 30',
            hc45Gen: 'AED 30',
            dc20Haz: 'AED 30',
            hc40Haz: 'AED 30',
            hc45Haz: 'AED 30'
        },
        {
            pol: 'AEJEA',
            name: 'EMERGENCY GEAR CHARGES',
            unitType: 'PER CONTAINER',
            currency: 'AED',
            dc20Gen: 'NA',
            hc40Gen: 'NA',
            hc45Gen: 'NA',
            dc20Haz: 'AED 1,250',
            hc40Haz: 'AED 1,250',
            hc45Haz: 'NA'
        },
        {
            pol: 'AEJEA',
            name: 'REEFER MONITORING CHARGES',
            unitType: 'PER CONTAINER/DAY',
            currency: 'AED',
            dc20Gen: 'NA',
            hc40Gen: 'NA',
            hc45Gen: 'NA',
            dc20Haz: 'NA',
            hc40Haz: 'NA',
            hc45Haz: 'NA'
        }
    ];

    downloadPDF(type: 'import' | 'export'): void {
        const charges = type === 'import' ? this.importCharges : this.exportCharges;
        const title = type === 'import' ? 'IMPORT LOCAL CHARGES' : 'EXPORT LOCAL CHARGES';
        const portLabel = type === 'import' ? 'POD' : 'POL';
        const typeLabel = type.toUpperCase();

        // Create PDF content
        const pdfContent = this.generatePDFHTML(charges, title, portLabel, typeLabel, type);

        // Open in new window for printing/saving as PDF
        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(pdfContent);
            printWindow.document.close();

            // Wait for content to load then trigger print
            printWindow.onload = () => {
                printWindow.print();
            };
        }
    }

    private generatePDFHTML(charges: any[], title: string, portLabel: string, typeLabel: string, type: string): string {
        const rows = charges.map(charge => `
      <tr>
        <td>${type === 'import' ? charge.pod : charge.pol}</td>
        <td>${typeLabel}</td>
        <td>${charge.name}</td>
        <td>${charge.unitType}</td>
        <td>${charge.currency}</td>
        <td>${charge.dc20Gen}</td>
        <td>${charge.hc40Gen}</td>
        <td>${charge.hc45Gen}</td>
        <td>${charge.dc20Haz}</td>
        <td>${charge.hc40Haz}</td>
        <td>${charge.hc45Haz}</td>
      </tr>
    `).join('');

        return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Dolphin Line - ${title}</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Segoe UI', Arial, sans-serif;
            padding: 40px;
            background: #fff;
            color: #1a1a2e;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #1e3a5f;
          }
          .logo-text {
            font-size: 28px;
            font-weight: 800;
            color: #1e3a5f;
            letter-spacing: 3px;
          }
          .logo-text span {
            color: #0891b2;
          }
          .title {
            font-size: 22px;
            font-weight: 700;
            color: #1e3a5f;
            margin-top: 15px;
            letter-spacing: 2px;
          }
          .subtitle {
            font-size: 12px;
            color: #64748b;
            margin-top: 8px;
          }
          .date {
            font-size: 11px;
            color: #94a3b8;
            margin-top: 10px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-size: 10px;
          }
          th {
            background: #1e3a5f;
            color: #fff;
            padding: 12px 8px;
            text-align: left;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          td {
            padding: 10px 8px;
            border-bottom: 1px solid #e2e8f0;
          }
          tr:nth-child(even) {
            background: #f8fafc;
          }
          tr:hover {
            background: #f1f5f9;
          }
          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            text-align: center;
            font-size: 10px;
            color: #64748b;
          }
          .note {
            margin-top: 20px;
            padding: 15px;
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            font-size: 11px;
            color: #92400e;
          }
          @media print {
            body { padding: 20px; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo-text">DOLPHIN <span>LINE</span></div>
          <div class="title">${title}</div>
          <div class="subtitle">AEJEA Port Container Charges</div>
          <div class="date">Generated on: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>${portLabel}</th>
              <th>EXP/IMP</th>
              <th>CHARGES</th>
              <th>UNIT/TYPE</th>
              <th>CURRENCY</th>
              <th>20'DC GEN</th>
              <th>40'HC GEN</th>
              <th>45'HC GEN</th>
              <th>20'DC HAZ</th>
              <th>40'HC HAZ</th>
              <th>45'HC HAZ</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>

        <div class="note">
          <strong>Note:</strong> HAZ columns indicate charges for hazardous cargo containers. 
          NA indicates the charge is not applicable. All rates are subject to change without prior notice.
        </div>

        <div class="footer">
          <p>© ${new Date().getFullYear()} Dolphin Line. All rights reserved.</p>
          <p style="margin-top: 5px;">For inquiries, please contact our customer service team.</p>
        </div>
      </body>
      </html>
    `;
    }
}
