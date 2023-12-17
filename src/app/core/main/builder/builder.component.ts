import { devMail, deviceId } from './../../../../env';
import { Component, Input, OnInit } from '@angular/core';
import { DeviceService } from '../../root/service/device.service';
import { developerId } from 'src/env';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit {
  deviceStatus: boolean = false;
  volt: string = '';
  current: string = '';
  puissance: string = '';
  switch: string = '';
  switchButton: string = '';

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
  @Input() inputDeviceId: string = '';
  ngOnInit() {
    this.onCheckDevice();
  }

  onCheckMail() {
    this.deviceService.check_developerCredentials().subscribe((data) => {
      console.log(data);
    });
  }
  onCheckDevice() {
    this.deviceService.check_deviceStatus().subscribe((ret) => {
      this.updateData(ret);
    });
  }
  updateData(_data: any) {
    this.volt = _data.result.status.actual_voltage;
    this.current = _data.result.status.actual_current;
    this.puissance = _data.result.status.actual_power;
    this.switch = _data.result.status.switch ? 'ON' : 'OFF';
    this.switchButton = _data.result.status.switch ? 'ETEINDRE' : 'ALLUMER';
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
    this.onCheckDevice();
  }
}
