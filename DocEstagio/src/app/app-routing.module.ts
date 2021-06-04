import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { UsuarioComponent } from './usuario/usuario.component';
const routes: Routes = [
  {path: 'empresa', component: EmpresaComponent},
  {path: 'usuario', component:UsuarioComponent}
];

@NgModule({

imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
