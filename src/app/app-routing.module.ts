import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { AddSunglassesComponent } from './views/add-sunglasses/add-sunglasses.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'add-sunglasses', component: AddSunglassesComponent },
  { path: 'cards', component: TarjetasComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


