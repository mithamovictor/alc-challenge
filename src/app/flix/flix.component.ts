import { Component } from '@angular/core';

@Component({
  selector: 'app-flix',
  templateUrl: './flix.component.html',
})
export class FlixComponent {
  flix1 = {
    id: 1,
    name: 'Passion',
    imageUrl: '/assets/images/passion.jpg',
    imageAlt: 'Passion Movie',
    year: '2010'
  }
}
