import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../Post';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    posts: Post[] = [];

    constructor(private service: PostService) {
    }

    ngOnInit() {
        this.service.getAll().subscribe(posts => this.posts = posts);
    }

}
