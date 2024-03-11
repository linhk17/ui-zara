import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { TRANSACTION_STATUS } from '@constant/status';
import { TransactionStatusEnum } from '@enum/status.enum';

@Directive({
  selector: '[appTransactionsBadge]'
})
export class TransactionsBadgeDirective {

  private _action: string = '';
  @Input() status: any;
  @Output() byClicked: EventEmitter<string> = new EventEmitter<any>();

  @HostListener('click', ['$event']) onClick(e: any) {
    e.stopPropagation();
    this.byClicked.next(this._action);
  }

  constructor(private elRef: ElementRef<HTMLElement>) {}

  ngOnChanges(): void {
    const array = TRANSACTION_STATUS;
    const value: any = array.find((item: any) => item.id === this.status);
    this._action = value ? value.action : '';
    this.elRef.nativeElement.innerHTML = value ? value.title : '';
      if (this.status === TransactionStatusEnum.paid) {
        this.elRef.nativeElement.classList.add('bg-warning');
      } else {
        this.elRef.nativeElement.classList.add('bg-light', 'text-secondary');
      }
  }
}
