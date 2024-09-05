import { Component, OnInit } from '@angular/core';
import { Html5QrcodeScanner } from 'html5-qrcode';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css']
})
export class QrScannerComponent implements OnInit {
  scannedData: string | null = null;
  dataFields: string[] = []; // To store separated data

  constructor() {}

  ngOnInit(): void {
    const config = { fps: 10, qrbox: 250 };
    const qrCodeScanner = new Html5QrcodeScanner('reader', config, false);

    qrCodeScanner.render(
      (decodedText: string) => {
        this.scannedData = decodedText;
        this.processScannedData(this.scannedData);
      },
      (error: any) => {
        console.warn('Error scanning QR Code', error);
      }
    );
  }

  processScannedData(data: string): void {
    // Split the scanned data by the '|' character
    this.dataFields = data.split('|');
  }
}
