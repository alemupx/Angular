import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

//Material
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


//Notificaciones
import { ToastrModule } from 'ngx-toastr';



//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { environment } from '../environments/environment';
import { DataDbService } from './services/data-db.service';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { IndexComponent } from './views/index/index.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AddSunglassesComponent } from './views/add-sunglasses/add-sunglasses.component'
import { WaitForPic } from './pipes/waitForPic.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { ContactUsFormComponent } from './components/contact-us-form/contact-us-form.component';
import { AboutUsComponent } from './views/about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavegadorComponent,
    TarjetasComponent,
    WaitForPic,
    FooterComponent, IndexComponent, CarouselComponent, AddSunglassesComponent, ContactUsComponent, ContactUsFormComponent, AboutUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatGridListModule,
    MatMenuModule,
    MaterialFileInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AngularFireStorageModule, MatProgressBarModule,
    MatCarouselModule.forRoot(),


  ],
  providers: [DataDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
