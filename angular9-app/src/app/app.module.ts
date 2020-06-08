//Importaciones generales
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importación archivo de rutas
import { AppRoutingModule } from './app-routing.module';
//Importación páginas de la aplicación
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
//Importación de componentes generales
import { GeneralComponentsModule } from './general-components.module';
//Importación módulo Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralComponentsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
