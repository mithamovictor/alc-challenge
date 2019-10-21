import { Component } from '@angular/core';

@Component({
  selector: 'app-flix',
  templateUrl: './flix.component.html',
})
export class FlixComponent {
  flix = {
    id: 1,
    name: 'Passion',
    imageUrl: '/assets/images/passion.jpg',
    imageAlt: 'Passion Movie',
    description: 'A movie about love.'
  }
}
