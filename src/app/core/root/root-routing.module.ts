import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './component/root.component';
import { BuilderComponent } from '../main/builder/builder.component';
import { SpeakComponent } from '../speak/speak.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'users',
        data: {
          title: 'profil',
        },
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'main',
        data: {
          title: 'profil',
        },
        component: BuilderComponent,
      },
      {
        path: 'speak',
        data: {
          title: 'profil',
        },
        component: SpeakComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
