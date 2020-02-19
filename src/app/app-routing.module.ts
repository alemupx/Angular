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
import { AddSunglassesV2Component } from './components/add-sunglasses-v2/add-sunglasses-v2.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'registro', component: RegistroComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'add-sunglasses', component: AddSunglassesV2Component, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search/:id', component: SearchComponent },
  { path: 'sunglasses', component: SunglassesComponent },
  { path: 'sunglass/:id', component: SunglassComponent },
  { path: '**', component: SunglassesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }



