import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RestContComponent } from './rest-cont/rest-cont.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ListaclasesComponent } from './listaclases/listaclases.component';

const routes: Routes = [
  { path: 'main/home', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'main/restcont', component: RestContComponent },
  {path:'main/alumnos',component: AlumnoComponent},
    {path:'main/profesor',component: ProfesorComponent},
    {path:'main/listaclases',component: ListaclasesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
