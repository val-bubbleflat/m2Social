import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Comment} from './Comment';

@Injectable()
export class CommentService {

    constructor(private http: HttpClient) {
    }

    getAll(livreId: number): Observable<Comment[]>{
        return this.http.get(`api/posts/${livreId}/comments`);
    }

    add(livreId, comment) {
        return this.http.post(`api/posts/${livreId}/comments`, comment);
    }

}
