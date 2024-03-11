import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-name-column',
  templateUrl: './avatar-name-column.component.html',
  styleUrls: ['./avatar-name-column.component.scss']
})
export class AvatarNameColumnComponent {
  @Input() item!: any;
  @Input() size!: number;
  @Input() className!: string;
  @Input() isAvatarUser: boolean = true;
}
