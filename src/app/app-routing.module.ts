import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
const routes: Routes = [
  { path: 'form', component: FormularioComponent },
  { path: 'grids', component: TarjetasComponent },
  { path: '**', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

