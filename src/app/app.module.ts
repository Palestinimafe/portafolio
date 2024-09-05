import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { IndexComponent } from './pages/index/index.component';
import { routes } from './app.routes'; 
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,         
    IndexComponent,     
    HabilidadesComponent,
    ContactoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
