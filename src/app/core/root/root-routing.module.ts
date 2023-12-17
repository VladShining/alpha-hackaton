import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './component/root.component';
import { BuilderComponent } from '../main/builder/builder.component';
import { SpeakComponent } from '../speak/speak.component';
import { ComponentAComponent } from '../main/component/a/a.component';

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
      {
        path: 'A',
        data: {
          title: 'profil',
        },
        component: ComponentAComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
