import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../User';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    users: User[] = [];

    constructor(private service: UserService) {
    }

    ngOnInit() {
        this.service.getAll().subscribe(users => this.users = users);
    }

}
