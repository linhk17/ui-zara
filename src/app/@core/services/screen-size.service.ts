import { Injectable, HostListener, ElementRef } from '@angular/core';
import { SCREEN_SIZE } from '@constant/index';
import { BehaviorSubject, fromEvent, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class ScreenSizeService {

	sizes: any = SCREEN_SIZE;

	get onResize$(): Observable<any> {
		return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
	}
	private resizeSubject = new BehaviorSubject<number>(0);

	constructor() {
		this.emitValue();
		this.onResize();
	}

	getScreenSize(size: number) {
		const currentSize = Object.keys(this.sizes).filter(key => {
			return size >= this.sizes[key];
		});
		return currentSize[currentSize.length - 1];
	}

	onResize() {
		fromEvent(window, 'resize').pipe(debounceTime(300)).subscribe(data => {
			this.emitValue();
		});
	}

	emitValue() {
		this.resizeSubject.next(window.innerWidth);
	}
}
