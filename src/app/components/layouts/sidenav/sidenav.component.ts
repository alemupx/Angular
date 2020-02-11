import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { SunglassesService } from 'src/app/services/sunglasses.service';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { resolve } from 'url';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  cantidad: number;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map
    (result => result.matches),
    shareReplay()
  );

  ngOnInit() {
    // this.cantidad = this.cart.getCantidad();
  }



  constructor(
    private breakpointObserver: BreakpointObserver,
    private sunglassesService: SunglassesService,
    private router: Router,
    private auth: AuthService,
    private cart: CartService,
  ) {

    this.cantidad = this.cart.getCantidad();
  }

  estaLogueado() {
    return this.auth.estaAutenticado();
  }

  buscarGafas(busqueda: string) {


    if (this.sunglassesService.buscarGafas(busqueda)) {
      this.router.navigate(['/search', busqueda]);
    }

  }

  cerrarSesion() {
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }

  verCantidad() {
    console.log(
      this.cart.getCantidad());
  }
}
