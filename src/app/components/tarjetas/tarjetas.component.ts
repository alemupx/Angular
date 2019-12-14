import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {

      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 2, subtitle: 'Bar', src: '1.jpg', content: 'Nostrud aute aliqua commodo occaecat do ad eu aliqua reprehenderit amet laborum sit laboris. Nisi cillum commodo aliquip ex labore qui minim eu dolore eiusmod Lorem cillum. Est quis nulla laborum mollit ut veniam anim sint culpa dolore ut esse. Tempor exercitation anim incididunt aliqua aute ipsum. Quis eu aliquip consequat consequat. Commodo cupidatat laboris enim in consectetur esse. Minim velit esse veniam mollit Lorem ex qui commodo adipisicing nostrud magna.' },
          { title: 'Card 2', cols: 2, rows: 2, subtitle: 'Bar', src: '2.jpg', content: 'Pariatur ea officia occaecat ad. Reprehenderit sunt Lorem qui id exercitation ut nulla duis culpa qui eiusmod. Laboris aute dolore ipsum elit ipsum sint aliquip mollit nostrud. Laboris adipisicing consequat ut tempor cupidatat tempor consequat sint aliquip do ullamco.' },
          { title: 'Card 3', cols: 2, rows: 2, subtitle: 'Bar', src: '3.jpg', content: 'Aute Lorem nulla ullamco voluptate cillum quis commodo fugiat amet occaecat mollit officia anim. Quis fugiat voluptate est amet proident officia amet cillum duis in aliqua. Do laboris commodo officia occaecat occaecat excepteur irure consectetur fugiat. Amet Lorem non nulla adipisicing qui id occaecat minim quis proident occaecat eiusmod.' },
          { title: 'Card 4', cols: 2, rows: 2, subtitle: 'Bar', src: '4.jpg', content: 'Aute Lorem nulla ullamco voluptate cillum quis commodo fugiat amet occaecat mollit officia anim. Quis fugiat voluptate est amet proident officia amet cillum duis in aliqua. Do laboris commodo officia occaecat occaecat excepteur irure consectetur fugiat. Amet Lorem non nulla adipisicing qui id occaecat minim quis proident occaecat eiusmod.' },

        ];
      }

      //Little size
      return [
        { title: 'Card 1', cols: 2, rows: 2, subtitle: 'Bar', src: '1.jpg', content: 'Ex ex duis non dolor in consectetur voluptate incididunt dolor amet veniam deserunt laboris. Minim quis cillum excepteur sint nisi officia Lorem sunt magna ex laboris. Non deserunt ea sunt eu incididunt ullamco. Ad Lorem excepteur magna ex reprehenderit qui anim dolore. Aliquip excepteur ullamco quis qui exercitation sit ex irure culpa non elit aliqua occaecat et. Nulla dolore eiusmod deserunt enim laboris laborum in voluptate labore voluptate do. Tempor exercitation aute ad officia enim exercitation irure eiusmod et.' },
        { title: 'Card 2', cols: 2, rows: 2, subtitle: 'Bar', src: '2.jpg', content: 'Ipsum duis ullamco in anim. Ex culpa eiusmod incididunt sit ut consequat adipisicing. Nostrud voluptate proident pariatur Lorem duis officia reprehenderit laboris anim aute cupidatat.' },
        { title: 'Card 3', cols: 2, rows: 2, subtitle: 'Bar', src: '3.jpg', content: 'Velit velit ullamco officia deserunt tempor tempor. Commodo et deserunt laborum eiusmod deserunt est sint nostrud qui incididunt. Elit aliqua non voluptate nulla mollit culpa magna laborum Lorem esse nisi commodo aute aliquip. Occaecat amet est ullamco occaecat quis elit in eiusmod quis Lorem consectetur incididunt excepteur ad. Cupidatat deserunt et nostrud elit. Esse et veniam minim laboris veniam anim culpa irure culpa.' },
        { title: 'Card 4', cols: 2, rows: 2, subtitle: 'Bar', src: '4.jpg', content: 'Aute Lorem nulla ullamco voluptate cillum quis commodo fugiat amet occaecat mollit officia anim. Quis fugiat voluptate est amet proident officia amet cillum duis in aliqua. Do laboris commodo officia occaecat occaecat excepteur irure consectetur fugiat. Amet Lorem non nulla adipisicing qui id occaecat minim quis proident occaecat eiusmod.' },


      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
