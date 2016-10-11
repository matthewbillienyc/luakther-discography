import { Component, OnInit } from '@angular/core';
import { Year } from './year';
import { FormsModule }   from '@angular/forms';
import { YearService } from './year.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <ul class="years">
      <li *ngFor="let year of years" 
        [class.selected]="year === selectedYear"
        (click)="onSelect(year)">
        <span class="badge">{{year.year}}</span>X Titles
      </li>
    </ul>
    <year-detail [year]="selectedYear"></year-detail>
    `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .years {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .years li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .years li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .years li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .years .text {
    position: relative;
    top: -3px;
  }
  .years .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `],
  providers: [YearService]
})

export class AppComponent implements OnInit {
  title = 'Steve Lukather Discography';
  years: Year[];
  selectedYear: Year;

  constructor(private yearService: YearService) { }
  
  onSelect(year: Year): void {
    this.selectedYear = year;
  }

  ngOnInit(): void {
    this.getYears();
  }

  getYears(): void {
    this.yearService.getYears().then(years => this.years = years);
  }
}
