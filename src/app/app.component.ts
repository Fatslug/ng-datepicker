import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	selectedDate;

	onDateSelect(event) {
		console.log(event);
		this.selectedDate = event;
	}
}
