import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// IMPORT DATEPICKER
import { DatepickerComponent } from './datepicker/datepicker.component';

import { AppComponent } from './app.component';

@NgModule({
declarations: [
	AppComponent,
	DatepickerComponent
],
imports: [
	BrowserModule,
	FormsModule,
	HttpModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
