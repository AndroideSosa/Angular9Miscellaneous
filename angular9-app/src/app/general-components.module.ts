//Importaciones generales
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
//Importacion módulo ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Importaciones de los Componentes Generales de la Aplicación
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    NavBarComponent,
    FooterComponent
  ]
})
export class GeneralComponentsModule { }
