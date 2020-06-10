import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importación de páginas
import { HomeComponent } from './pages/home/home.component';
import { TemplateComponent } from './pages/formularios/template/template.component';
import { ReactiveComponent } from './pages/formularios/reactive/reactive.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent  },
  {path: 'form-template', component: TemplateComponent},
  {path: 'form-reactive', component: ReactiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
