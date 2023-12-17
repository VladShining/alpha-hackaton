import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './component/root.component';
import { DeviceService } from './service/device.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  providers: [DeviceService],
  declarations: [RootComponent],
  imports: [CommonModule, RootRoutingModule, HttpClientModule],
})
export class RootModule {}
