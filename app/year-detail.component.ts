import { Component, Input } from '@angular/core';
import { Year } from './year';

@Component({
  selector: 'year-detail',
  template: `
  <div *ngIf="year">
    <h2>{{year.year}} titles!</h2>
  </div>
  `
})

export class YearDetailComponent {
  @Input()
  year: Year;
}
