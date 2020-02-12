import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { SunglassesComponent } from './components/sunglasses/sunglasses.component';
import { SunglassComponent } from './components/sunglass/sunglass.component';
import { SearchComponent } from './components/layouts/search/search.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'registro', component: RegistroComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'sunglass/:id', component: SunglassComponent },
  { path: 'search/:id', component: SearchComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: SunglassesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }



