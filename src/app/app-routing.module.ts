import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeComponent } from './fe/fe.component';
import { BeComponent } from './be/be.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'fe',
    pathMatch: 'full',
  },
  {
    path: 'fe',
    component: FeComponent
  },
  {
    path: 'be',
    component: BeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
