import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() sunglass: any = {};

  constructor() { }

  ngOnInit() {
  }

  onShow() {
    console.log(this.sunglass);
  }

}
