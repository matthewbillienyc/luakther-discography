import { Injectable } from '@angular/core';
import { Year } from './year';
import { YEARS } from './mock-years';
@Injectable()
export class YearService {
  getYears(): Promise<Year[]> {
    return Promise.resolve(YEARS);
  }
}
