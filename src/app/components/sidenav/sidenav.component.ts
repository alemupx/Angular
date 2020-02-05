import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { SunglassesService } from 'src/app/services/sunglasses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private _sunglassesService: SunglassesService, private router: Router, private auth: AuthService) { }

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
