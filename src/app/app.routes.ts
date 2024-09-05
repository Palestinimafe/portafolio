import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: ErrorComponent }
];
