import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-segment-selector',
  templateUrl: './segment-selector.component.html',
  styleUrls: ['./segment-selector.component.scss']
})
export class SegmentSelectorComponent {
  @Input() section:string = 'geography';
}
