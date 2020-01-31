import { Component, OnInit } from '@angular/core';
import { SunglassesService } from 'src/app/services/sunglasses.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor(private _sunglassesService: SunglassesService, private router: Router, private auth: AuthService) {
  }

  ngOnInit() {

  }

  estaLogueado() {
    return this.auth.estaAutenticado();
  }

  buscarGafas(busqueda: string) {

    if (this._sunglassesService.buscarGafas(busqueda)) {
      this.router.navigate(['/search', busqueda]);
    }

  }

  cerrarSesion() {
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }



}
