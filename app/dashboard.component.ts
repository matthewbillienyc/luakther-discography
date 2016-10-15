import { Component, OnInit } from '@angular/core';
import { Year } from './year';
import { YearService } from './year.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  providers: [
    YearService
  ]
})
export class DashboardComponent implements OnInit {

  years: Year[] = [];

  constructor(private yearService: YearService) { }

  ngOnInit(): void {
    this.yearService.getYears()
      .then(years => this.years = years.slice(1,5));
  }

  gotoDetail(year: Year): void { }
  
}
