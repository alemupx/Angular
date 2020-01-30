import { Component, OnInit } from '@angular/core';
import { SunglassesService, Sunglasses } from 'src/app/services/sunglasses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _sunglassesService: SunglassesService, private router: Router) {
  }


  ngOnInit() {
  }

  buscarGafas(busqueda: string) {

    if (this._sunglassesService.buscarGafas(busqueda)) {
      this.router.navigate(['/search', busqueda]);
    }

  }



}
