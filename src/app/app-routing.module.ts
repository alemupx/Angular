import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
const routes: Routes = [
  { path: 'form', component: FormularioComponent },
  { path: 'grids', component: TarjetasComponent },
  { path: '**', component: TarjetasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

