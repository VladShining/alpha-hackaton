import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProfilComponent } from './components/profil/profil.component';

@NgModule({
  declarations: [ProfilComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
