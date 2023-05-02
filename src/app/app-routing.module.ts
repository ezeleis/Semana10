import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { NgForComponent } from './ng-for/ng-for.component';

const routes: Routes = [
  {path:'cards',component:NgForComponent},
  {path:'modal', component:ModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
