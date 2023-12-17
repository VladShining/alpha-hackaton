import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './component/root.component';
import { BuilderComponent } from '../main/builder/builder.component';
import { SpeakComponent } from '../speak/speak.component';
import { ComponentAComponent } from '../main/component/a/a.component';
import { BoardComponent } from '../main/board/board.component';

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
          title: 'main',
        },
        component: BoardComponent,
      },
      {
        path: 'speak',
        data: {
          title: 'speak',
        },
        component: SpeakComponent,
      },
      {
        path: 'device',
        data: {
          title: 'device',
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
