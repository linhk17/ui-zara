import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
    declarations: [
        AvatarComponent
    ],
    imports: [
        CommonModule,
        AvatarModule
    ],
    exports: [
        AvatarComponent
    ]
})
export class DigiAvatarModule { }