import { system } from '../../state/state.js';

class BatteryStatus {
  constructor(target) {
    this.supported = 'getBattery' in navigator;
    this.battery = null;
    this.target = target;
    this.init();
  }
  init() {
    if (this.supported) {
      this.supported = true;

      navigator.getBattery().then((battery) => {
        this.battery = battery;
        this.updateBatteryStatus();

        this.battery.addEventListener('chargingchange', () => {
          this.updateBatteryStatus();
        });

        this.battery.addEventListener('levelchange', () => {
          this.updateBatteryStatus();
        });
      });
    }
  }
  updateBatteryStatus() {
    this.target = this;
    console.log('battery-status changed', this.target);
  }
}

export const batteryStatus = new BatteryStatus(system.device.battery);
