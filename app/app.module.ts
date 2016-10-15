import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { YearDetailComponent } from './year-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { YearsComponent } from './years.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'years',
        component: YearsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    AppComponent,
    YearDetailComponent,
    YearsComponent,
    DashboardComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
