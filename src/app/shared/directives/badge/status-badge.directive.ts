import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { STATUS, JOB_STATUS, PROMOTION_STATUS } from '@constant/index';
import { JobStatusEnum, UserStatusEnum } from '@enum/status.enum';

@Directive({
  selector: '[appStatusBadge]',
})
export class StatusBadgeDirective implements OnChanges {
  // @Input() set appStatusBadge(status: UserStatusEnum) {
  private _action: string = '';
  @Input() status: any;
  @Input() type: 'status' | 'job' | 'promotion' = 'status';
  @Input() isStopPropagation: boolean = true;
  @Output() byClicked: EventEmitter<string> = new EventEmitter<any>();

  @HostListener('click', ['$event']) onClick(e: any) {
    if(this.isStopPropagation){
      e.stopPropagation();
    }
    this.byClicked.next(this._action);
  }

  constructor(private elRef: ElementRef<HTMLElement>) {}

  ngOnChanges(): void {
    const array: any = this.type === 'job' ? JOB_STATUS 
      : this.type === 'promotion' ? PROMOTION_STATUS : STATUS;
    const value: any = array.find((item: any) => item.id === this.status);
    this._action = value ? value.action : '';
    this.elRef.nativeElement.innerHTML = value ? value.title : '';
    if (this.type == 'status') {
      if (this.status === UserStatusEnum.active) {
        this.elRef.nativeElement.classList.remove('bg-dark');
        this.elRef.nativeElement.classList.add('bg-info');
      } else {
        this.elRef.nativeElement.classList.remove('bg-info');
        this.elRef.nativeElement.classList.add('bg-dark');
      }
    } else {
      switch (this.status) {
        case JobStatusEnum.active:
          this.elRef.nativeElement.classList.remove('bg-light', 'text-secondary');
          this.elRef.nativeElement.classList.add('bg-info');
          break;
        case JobStatusEnum.completed:
          this.elRef.nativeElement.classList.remove('bg-info');
          this.elRef.nativeElement.classList.add('bg-success');
          break;
        case JobStatusEnum.canceled:
        case JobStatusEnum.rejected:
          this.elRef.nativeElement.classList.remove('bg-light', 'text-secondary');
          this.elRef.nativeElement.classList.add('bg-danger');
          break;
        default:
          this.elRef.nativeElement.classList.add('bg-light', 'text-secondary');
      }
    }
  }

  //remove all classes that begin with a certain string
  removeClassesCertain(certainString: string){
    this.elRef.nativeElement.className.replace(/\bbg.*?\b/g, '');
  }
}
