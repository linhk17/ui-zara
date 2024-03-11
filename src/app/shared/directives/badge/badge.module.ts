import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBadgeDirective } from './status-badge.directive';
import { FeeBadgeDirective } from './fee-badge.directive';
import { TransactionsBadgeDirective } from './transactions-badge.directive';


@NgModule({
  declarations: [
    StatusBadgeDirective,
    FeeBadgeDirective,
    TransactionsBadgeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusBadgeDirective,
    FeeBadgeDirective,
    TransactionsBadgeDirective
  ]
})
export class BadgeModule { }
