import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { YearDetailComponent } from './year-detail.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, YearDetailComponent ],
  bootstrap:    [ AppComponent, YearDetailComponent ]
})
export class AppModule { }
