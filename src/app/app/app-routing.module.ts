import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadesComponent } from '../pages/habilidades/habilidades.component';
import { ContactoComponent } from '../pages/contacto/contacto.component';
import { IndexComponent } from '../pages/index/index.component';
import { ErrorComponent } from '../pages/error/error.component';

const routes: Routes = [
  { path: '', component: IndexComponent }, // Página de inicio
  { path: 'habilidades', component: HabilidadesComponent }, // Página de habilidades
  { path: 'contacto', component: ContactoComponent }, // Página de contacto
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
