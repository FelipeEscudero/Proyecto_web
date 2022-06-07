import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {ContactComponent} from './contact/contact.component'
import {AlimentosComponent} from './alimentos/alimentos.component'
import {EjerciciosComponent} from './ejercicios/ejercicios.component'
import {CalculadoraComponent} from './calculadora/calculadora.component'
import {PlanAlimenticioComponent} from './plan-alimenticio/plan-alimenticio.component'

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"alimentos",component:AlimentosComponent},
  {path:"ejercicios",component:EjerciciosComponent},
  {path:"calculadora",component:CalculadoraComponent},
  {path:"plan-alimenticio",component:PlanAlimenticioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
