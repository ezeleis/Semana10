import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ModalComponent } from './modal/modal.component';
import { NgForComponent } from './ng-for/ng-for.component';

const routes: Routes = [
  {path:'cards',component:NgForComponent},
  {path:'modal', component:ModalComponent},
  {path:'formulario', component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
