import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../Post';
import * as moment from 'moment';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    posts: Post[] = [];

    post: Post = {
        id: 0,
        content: '',
        userId: 1,
        timestamp: 0
    }

    constructor(private service: PostService) {
    }

    ngOnInit() {
        this.service.getAll().subscribe(posts => this.posts = posts);
    }

    add() {
        this.post.timestamp = moment().format('x');
        this.service.add(this.post).subscribe(post => {
            this.posts.push(post);
        });
        this.post.content = '';
        this.post.img = '';
    }

}
