//Tools
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http'

//Components
import { NavegadorComponent } from './components/navegador/navegador.component';
import { FooterComponent } from './components/footer/footer.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

//Views
import { IndexComponent } from './views/index/index.component';
import { AddSunglassesComponent } from './views/add-sunglasses/add-sunglasses.component'
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';


//Material
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


//Notificaciones
import { ToastrModule } from 'ngx-toastr';



//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


//Pipe
import { WaitForPic } from './pipes/waitForPic.pipe';
import { SignOnComponent } from './views/sign-on/sign-on.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    TarjetasComponent,
    WaitForPic,
    FooterComponent,
    IndexComponent,
    CarouselComponent,
    AddSunglassesComponent,
    ContactUsComponent,
    AboutUsComponent,
    SignUpComponent,
    SignOnComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatMenuModule,
    MaterialFileInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ToastrModule.forRoot(),
    MatCarouselModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule, MatProgressBarModule,
    AngularFireAuthModule,
    HttpClientModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
