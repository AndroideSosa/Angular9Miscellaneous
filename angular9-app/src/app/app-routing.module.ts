import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importación de páginas
import { HomeComponent } from './pages/home/home.component';
import { TemplateComponent } from './pages/formularios/template/template.component';
import { ReactiveComponent } from './pages/formularios/reactive/reactive.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { HomeLazyComponent } from './LazyLoad/home-lazy/home-lazy.component';
import { ClassInterfaceComponent } from './pages/class-interface/class-interface.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent  },
  {path: 'images-grid', component: ImagenesComponent},
  {path: 'form-template', component: TemplateComponent},
  {path: 'form-reactive', component: ReactiveComponent},
  {path: 'lazy-load', component: HomeLazyComponent},
  {path: 'class-interface', component: ClassInterfaceComponent},
  { path: 'dashboard', loadChildren: () => import('./LazyLoad/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'leaves', loadChildren: () => import('./LazyLoad/leaves/leaves.module').then(m => m.LeavesModule) },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
