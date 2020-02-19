import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SunglassesService, Sunglasses } from 'src/app/services/sunglasses.service';


@Component({
  selector: 'app-sunglass',
  templateUrl: './sunglass.component.html',
  styleUrls: ['./sunglass.component.css']
})
export class SunglassComponent implements OnInit {

  sunglassesList: Sunglasses[] = [];

  constructor(private activatedRoute: ActivatedRoute, private _sunglassesService: SunglassesService) {
    this.activatedRoute.params.subscribe(params => {
      this.sunglassesList.push(this._sunglassesService.traerGafa(params['id']));
    });
  }

  ngOnInit() {
    // console.log(this.sunglassesList);
  }

}
