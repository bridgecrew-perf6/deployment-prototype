import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSiteComponent } from './new-site/new-site.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new-site',
    component: NewSiteComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
