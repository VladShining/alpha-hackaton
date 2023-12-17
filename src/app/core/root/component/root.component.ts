import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../service/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  constructor(private deviceService: DeviceService) {}

  ngOnInit() {}

  onCheck() {
    this.deviceService.check_developerCredentials().subscribe((data) => {
      console.log(data);
    });
  }
}
