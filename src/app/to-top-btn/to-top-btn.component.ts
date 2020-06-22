import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-to-top-btn',
  templateUrl: './to-top-btn.component.html',
  styleUrls: ['./to-top-btn.component.scss'],
	animations: [
		trigger('inOutAnimation', [
			transition(':enter', [
				style({opacity: 0}),
				animate('.3s', style({
					opacity: 1
				}))
			]),
			transition(':leave', [
				style({opacity: 1}),
				animate('.3s', style({
					opacity: 0
				}))
			])
		])
	]
})
export class ToTopBtnComponent implements OnInit{
	@ViewChild('toTop', {static: true}) buttonRef: ElementRef
	windowHeight: number = window.innerHeight
	isScrollToTop: boolean = false
	isStuck: boolean = false
	parentNode: HTMLElement

	ngOnInit(): void {
		this.parentNode = this.buttonRef.nativeElement

		this.isScrollToTop = this.checkScroll()
		this.isStuck = this.checkIsStuck(this.parentNode)
	}
	checkScroll(): boolean {
		return (window.pageYOffset > this.windowHeight/2)
	}
	checkIsStuck(parent: HTMLElement): boolean {
		return ((window.pageYOffset+this.windowHeight) > (this.parentNode.offsetTop+45))
	}
	@HostListener('window:scroll', ['$event'])
	onScroll(e): void {
		this.isScrollToTop = this.checkScroll()
		this.isStuck = this.checkIsStuck(this.parentNode)
	}
	scrollToTop(): void {
		(function smoothscroll(): void {
			let currentScroll: number = window.pageYOffset
			if (currentScroll > 0) {
				window.requestAnimationFrame(smoothscroll)
				window.scrollTo(0, currentScroll - (currentScroll / 8))
			}
		})()
	}
}
