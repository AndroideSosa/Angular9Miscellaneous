//Importaciones generales
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { TextMaskModule } from 'angular2-text-mask';
//Importación archivo de rutas
import { AppRoutingModule } from './app-routing.module';
//Importación páginas de la aplicación
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TemplateComponent } from './pages/formularios/template/template.component';
import { ReactiveComponent } from './pages/formularios/reactive/reactive.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
//Importacion de directivas
import { UppercaseDirective } from './directives/uppercase.directive';
import { OnlyLettersDirective } from './directives/only-letters.directive';
//Importación de componentes generales
import { GeneralComponentsModule } from './general-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeLazyComponent } from './LazyLoad/home-lazy/home-lazy.component';
import { ClassInterfaceComponent } from './pages/class-interface/class-interface.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateComponent,
    ReactiveComponent,
    OnlyLettersDirective,
    UppercaseDirective,
    ImagenesComponent,
    HomeLazyComponent,
    ClassInterfaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    TextMaskModule,
    GeneralComponentsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
