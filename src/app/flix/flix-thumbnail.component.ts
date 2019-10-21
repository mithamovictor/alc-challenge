import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flix-thumbnail',
  templateUrl: './flix-thumbnail.component.html',
})
export class FlixThumbnailComponent {
  @Input() flix:any
}
