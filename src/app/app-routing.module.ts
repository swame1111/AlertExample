import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConfirmdialogComponent} from './components/confirmdialog/confirmdialog.component'

const routes: Routes = [

{
  path: '',
  pathMatch: 'full',
  component: ConfirmdialogComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
