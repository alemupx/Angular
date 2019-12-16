import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { TablaComponent } from './components/tabla/tabla.component';
const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'listado', component: TablaComponent },
  { path: 'listadito', component: TarjetasComponent },
  { path: '**', component: TarjetasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

