import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../Post';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    post: Post;

    constructor(private route: ActivatedRoute, private service: PostService) {
    }

    ngOnInit() {
        this.route.paramMap.switchMap(
            (params: ParamMap) => this.service.get(+params.get('id'))
        ).subscribe(post => this.post = post);
    }

}
