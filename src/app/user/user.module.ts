import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from './user.service';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'users', component: UserListComponent
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes)
    ],
    declarations: [UserComponent, UserListComponent],
    providers: [UserService],
    exports: [UserComponent]
})
export class UserModule {
}
