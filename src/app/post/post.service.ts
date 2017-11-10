import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Post} from './Post';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostService {

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Post[]> {
        return this.http.get('api/posts');
    }

    get(id: number): Observable<Post> {
        return this.http.get(`api/posts/${id}`);
    }

}
