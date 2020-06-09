//Importaciones generales
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Importación archivo de rutas
import { AppRoutingModule } from './app-routing.module';
//Importación páginas de la aplicación
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
//Importación de componentes generales
import { GeneralComponentsModule } from './general-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GeneralComponentsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
