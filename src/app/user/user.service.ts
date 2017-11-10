import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './User';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
    }

    get(id: number): Observable<User> {
        return this.http.get(`api/users/${id}`);
    }

    getAll(id: number): Observable<User[]> {
        return this.http.get(`api/users`);
    }

}
