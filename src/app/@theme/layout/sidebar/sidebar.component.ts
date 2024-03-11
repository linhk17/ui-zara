import {
    Component,
    OnInit
} from '@angular/core';
import { navConfiguration } from '@constant/nav-config';
import { AuthService } from '@services/auth.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    host: {
        'class': 'h-100 d-flex flex-column justify-content-between'
    }
})
export class SidebarComponent implements OnInit {

    menu = navConfiguration;

    constructor(private _authService: AuthService){}

    ngOnInit() { }
    
    logout(){
        this._authService.logout()
    }

}
