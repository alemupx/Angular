import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SunglassesService, Sunglasses } from 'src/app/services/sunglasses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  termino: string;
  sunglassesList: Sunglasses[] = [];


  constructor(private activatedRoute: ActivatedRoute, private _sunglassesService: SunglassesService, private router: Router) {

  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['id'];
      this.sunglassesList = this._sunglassesService.buscarGafas(params['id']);
    });
  }

  viewSunglasses(id) {
    this.router.navigate(['/sunglass', id]);
  }

}
