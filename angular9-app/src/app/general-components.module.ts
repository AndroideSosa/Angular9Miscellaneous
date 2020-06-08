import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importaciones de los Componentes Generales de la Aplicación
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    NavBarComponent
  ]
})
export class GeneralComponentsModule { }
