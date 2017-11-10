import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { PostRootComponent } from './post-root/post-root.component';
import {RouterModule, Routes} from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './post.service';
import { PostComponent } from './post/post.component';
import {CommentModule} from '../comment/comment.module';

const appRoutes: Routes = [
    {
        path: 'posts', component: PostRootComponent,
        children: [
            {path: ':id', component: PostComponent, pathMatch: 'full'},
            {path: '', component: PostListComponent, pathMatch: 'full'}
        ]
    },
    // {path: 'admin', component: LivreListComponent},
];

@NgModule({
    imports: [
        CommonModule,
        CommentModule,
        HttpClientModule,
        RouterModule.forChild(appRoutes),
    ],
    declarations: [PostRootComponent, PostListComponent, PostComponent],
    providers: [PostService]
})
export class PostModule {
}
