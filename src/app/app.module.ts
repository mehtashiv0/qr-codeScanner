import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For ngModel in the form

import { AppComponent } from './app.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component'; // Import the QR Scanner component

@NgModule({
  declarations: [
    AppComponent,
    QrScannerComponent // Declare the QR Scanner component here
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule if you're using forms with ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
