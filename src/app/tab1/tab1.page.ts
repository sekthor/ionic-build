import { Component, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  devices: any[] = [];

  constructor(
    private ble:BLE,
    private ngZone: NgZone) {}

  scan(): void {
    this.devices = [];
    this.ble.scan([], 15).subscribe(
      device => this.onDeviceDiscovered(device));
  }

  onDeviceDiscovered(device) {
    this.ngZone.run(() => {
      this.devices.push(device);
    })
  }

}
