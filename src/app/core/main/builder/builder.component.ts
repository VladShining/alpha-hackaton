import { devMail, deviceId } from './../../../../env';
import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../root/service/device.service';
import { developerId } from 'src/env';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit {
  deviceStatus: boolean = false;
  dataOFF = {
    developerId: developerId,
    email: devMail,
    deviceId: deviceId,
    switch_status: 'OFF',
  };
  dataON = {
    developerId: developerId,
    email: devMail,
    deviceId: deviceId,
    switch_status: 'ON',
  };
  constructor(private deviceService: DeviceService) {}

  ngOnInit() {}

  onCheckMail() {
    this.deviceService.check_developerCredentials().subscribe((data) => {
      console.log(data);
    });
  }
  onCheckDevice() {
    this.deviceService.check_deviceStatus().subscribe((data) => {
      console.log(data);
    });
  }
  onCheckDeviceStat() {
    this.deviceService.get_deviceStatistics().subscribe((data) => {
      console.log(data);
    });
  }
  switchDevice() {
    if (this.deviceStatus) {
      this.deviceService.switchDevice(this.dataON).subscribe((retour) => {
        console.log(retour);
      });
      this.deviceStatus = !this.deviceStatus;
    } else {
      this.deviceService.switchDevice(this.dataOFF).subscribe((retour) => {
        console.log(retour);
      });
      this.deviceStatus = !this.deviceStatus;
    }
  }
}
