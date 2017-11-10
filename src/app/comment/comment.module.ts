import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentListComponent} from './comment-list/comment-list.component';
import {CommentService} from './comment.service';
import { CommentRootComponent } from './comment-root/comment-root.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
    ],
    declarations: [CommentListComponent, CommentRootComponent],
    providers: [CommentService],
    exports: [CommentRootComponent]
})
export class CommentModule {
}
