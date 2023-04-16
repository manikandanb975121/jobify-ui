import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DashbaordComponent } from './components/dashboard/dashbaord/dashbaord.component';
import { ProductsComponent } from './components/products/products/products.component';
import { JobDetailsComponent } from './components/products/job-details/job-details.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashbaordComponent
  },
  {
    path:'jobs',
    component: ProductsComponent
  },
  {
    path: 'jobs/:id',
    component: JobDetailsComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
