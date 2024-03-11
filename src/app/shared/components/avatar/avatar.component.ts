import {
    Component,
    Input
} from '@angular/core';
import { User } from '@interfaces/user.interface';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})

export class AvatarComponent {

    @Input() user!: User;
    @Input() size: number = 40;
    @Input() className: string = '';

    constructor() { }
}
