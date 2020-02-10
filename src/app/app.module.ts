//Modules
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


//Material
import { MatToolbarModule, MatIconModule } from '@angular/material/';


//Notificaciones
import { ToastrModule } from 'ngx-toastr';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

//Components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SunglassesComponent } from './components/sunglasses/sunglasses.component';
import { SunglassComponent } from './components/sunglass/sunglass.component';
import { SearchComponent } from './components/search/search.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SunglassCardComponent } from './components/sunglass-card/sunglass-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AddSunglassesComponent } from './components/forms/add-sunglasses/add-sunglasses.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { AddSunglassesV2Component } from './components/forms/add-sunglasses-v2/add-sunglasses-v2.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    SunglassesComponent,
    SunglassComponent,
    SearchComponent,
    AboutUsComponent,
    SunglassCardComponent,
    LoginComponent,
    RegistroComponent,
    AddSunglassesComponent,
    SidenavComponent,
    NgDropFilesDirective,
       AddSunglassesV2Component,
       CarouselComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
