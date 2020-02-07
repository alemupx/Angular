import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SunglassesService } from '../../services/sunglasses.service';

@Component({
  selector: 'app-sunglass-card',
  templateUrl: './sunglass-card.component.html',
  styleUrls: ['./sunglass-card.component.css']
})
export class SunglassCardComponent implements OnInit {

  @Input() sunglass: any = {};
  @Input() id: number;


  constructor(private router: Router, private servicio:SunglassesService) { }

  ngOnInit() {
  }

  viewSunglasses() {
    this.router.navigate(['/sunglass', this.id]);
  }

  deleteSunglasses(id) {
    this.servicio.eliminarGafas(id);
  }

}
