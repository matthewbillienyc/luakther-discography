import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { YearDetailComponent } from './year-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, YearDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
