import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './component/root.component';
import { DeviceService } from './service/device.service';
import { FormsModule } from '@angular/forms';
import { ComponentAComponent } from '../main/component/a/a.component';
import { ComponentBComponent } from '../main/component/b/b.component';
import { BuilderComponent } from '../main/builder/builder.component';
import { BoardComponent } from '../main/board/board.component';

@NgModule({
  providers: [DeviceService],
  declarations: [
    RootComponent,
    ComponentAComponent,
    ComponentBComponent,
    BuilderComponent,
    BoardComponent,
  ],
  imports: [CommonModule, FormsModule, RootRoutingModule, HttpClientModule],
})
export class RootModule {}
