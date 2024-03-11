import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFeeBadge]'
})
export class FeeBadgeDirective {
  @Input() set appFeeBadge(type: 'service' | 'booking') {

    switch(type){
      case 'service':
        this.elRef.nativeElement.classList.add("bg-dark");
        this.elRef.nativeElement.innerHTML = "Service Fee";
        break;

      case 'booking':
          this.elRef.nativeElement.classList.add("bg-primary");
          this.elRef.nativeElement.innerHTML = "Booking Fee";
          break;
    }
  }
  constructor(private elRef: ElementRef<HTMLElement>) {}

}
