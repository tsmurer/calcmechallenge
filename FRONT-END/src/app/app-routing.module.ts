import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';

const appRoutes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'list', component: ListComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
