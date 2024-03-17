import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	date = new Date();

	constructor() { }

	onSrollTop(){
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
}
