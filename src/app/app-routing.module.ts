import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SunglassesComponent } from './components/sunglasses/sunglasses.component';
import { SunglassComponent } from './components/sunglass/sunglass.component';
import { SearchComponent } from './components/search/search.component';



const routes: Routes = [
  { path: 'home', component: SunglassesComponent },  
  { path: 'sunglass/:id', component: SunglassComponent },
  { path: 'search/:id', component: SearchComponent },
  { path: '**', component: SunglassesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }



