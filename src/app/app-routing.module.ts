import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { AlimentadorTajetasComponent } from './components/alimentador-tajetas/alimentador-tajetas.component';

const routes: Routes = [
  { path: 'home', component: TarjetasComponent },
  { path: 'form', component: AlimentadorTajetasComponent },
  { path: 'glassesfeed', component: FormularioComponent },
  { path: '**', component: TarjetasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

