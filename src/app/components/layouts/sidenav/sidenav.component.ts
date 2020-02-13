import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { SunglassesService } from 'src/app/services/sunglasses.service';
import { Router, NavigationStart } from '@angular/router';
import { CartService } from '../../../services/cart.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  estaSobreElemento = false;
  estaSobreElemento2 = false;
  cantidad: number;
  routeHidden: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map
    (result => result.matches),
    shareReplay()
  );

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        if (e.url === '/' || e.url === '/sunglasses' || e.url === '/home' || e.url === '/login' || e.url === '/index') {
          this.routeHidden = false;
        } else {
          this.routeHidden = true;
        }
      }
    });
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

  buscarGafas(busqueda: string) {


    if (this.sunglassesService.buscarGafas(busqueda)) {
      this.router.navigate(['/search', busqueda]);
    }

  }

  estaLogueado() {
    return this.auth.estaAutenticado();
  }

  cerrarSesion() {
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }

}
