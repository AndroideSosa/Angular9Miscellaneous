//Importaciones generales
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { TextMaskModule } from 'angular2-text-mask';
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
import { OnlyLettersDirective } from './directives/only-letters.directive';
import { UppercaseDirective } from './directives/uppercase.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateComponent,
    ReactiveComponent,
    OnlyLettersDirective,
    UppercaseDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
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
