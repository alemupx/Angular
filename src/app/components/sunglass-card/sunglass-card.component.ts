import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sunglass-card',
  templateUrl: './sunglass-card.component.html',
  styleUrls: ['./sunglass-card.component.css']
})
export class SunglassCardComponent implements OnInit {

  @Input() sunglass: any = {};
  @Input() id: number;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewSunglasses() {
    this.router.navigate(['/sunglass', this.id]);
  }

}
