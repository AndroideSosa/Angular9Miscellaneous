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
import { TemplateComponent } from './pages/formularios/template/template.component';
import { ReactiveComponent } from './pages/formularios/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateComponent,
    ReactiveComponent
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
