import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
	animations: [
		trigger('inOutAnimation', [
			transition(':enter', [
				style({opacity: 0}),
				animate('.5s', style({
					opacity: 1
				}))
			]),
			transition(':leave', [
				style({opacity: 1}),
				animate('.5s', style({
					opacity: 0
				}))
			])
		])
	]
})
export class MobileMenuComponent {

	@Output() onOpen: EventEmitter<boolean> = new EventEmitter<boolean>()

	isOpen: boolean = false;

	toggleMenu(): void {
		this.isOpen = !this.isOpen;
		this.onOpen.emit(this.isOpen)
	}
}
