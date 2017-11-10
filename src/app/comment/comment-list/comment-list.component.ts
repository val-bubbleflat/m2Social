import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../comment.service';
import {Comment} from '../Comment';
import * as moment from 'moment';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

    @Input() livreId: number;

    comments: Comment[] = [];

    comment: Comment = {
        id: 0,
        postId: this.livreId,
        content: '',
        userId: 1,
        timestamp: 0
    };

    constructor(private service: CommentService) {
    }

    ngOnInit() {
        this.service.getAll(this.livreId).subscribe(comments => this.comments = comments);
    }

    add(): void {
        this.comment.timestamp = moment().format('x');
        this.service.add(this.livreId, this.comment).subscribe();
        this.comments.push(this.comment);
    }

}
