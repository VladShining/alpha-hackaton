import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL, developerId, devMail, deviceId } from 'src/env';
import { yearType } from '../utils/statistic';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  year: number = 2023;
  constructor(private http: HttpClient) {}

  check_developerCredentials(): Observable<any> {
    return this.http.get(
      `${apiURL}/boulou_check_developerCredentials?email=${devMail}&developerId=${developerId}`
    );
  }
  check_deviceStatus(): Observable<any> {
    return this.http.get(
      `${apiURL}/boulou_check_deviceStatus?developerId=${developerId}&email=${devMail}&deviceId=${deviceId}`
    );
  }
  get_deviceStatistics(): Observable<any> {
    return this.http.get(
      `${apiURL}/boulou_get_deviceStatistics?developerId=${developerId}&email=${devMail}&deviceId=${deviceId}&period_type=${yearType.year}&period_value=${this.year}`
    );
  }

  switchDevice(data: any): Observable<any> {
    return this.http.post(`${apiURL}/boulou_switch_device`, data);
  }
}
