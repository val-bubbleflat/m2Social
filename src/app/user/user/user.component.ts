import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    @Input() id?: number;

    user?: User;

    constructor(private service: UserService) {
    }

    ngOnInit() {
        this.service.get(this.id).subscribe(user => this.user = user);
    }

}
