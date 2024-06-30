import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RickComponent } from './components/rick/rick.component';

const routes: Routes = [
  {
    path:'',
    component: RickComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
