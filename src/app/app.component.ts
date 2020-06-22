import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'idea-ng'
	is_shifted: boolean = false;

  toggleMenu(isOpen: boolean): void {
		this.is_shifted = isOpen;
	}
}
