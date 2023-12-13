import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: '/',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: '/detail',
    // component: DetailComponent,
    loadComponent: () =>
      import('./pages/detail/detail.component').then((m) => m.DetailComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
