import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent }, // Página de inicio
  { path: 'habilidades', component: HabilidadesComponent }, // Página de habilidades
  { path: 'contacto', component: ContactoComponent }, // Página de contacto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
