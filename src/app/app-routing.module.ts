import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventedComponent } from './invented/invented.component';
import { ModelsComponent } from './models/models.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"models",component:ModelsComponent},
  {path:"invented",component:InventedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
