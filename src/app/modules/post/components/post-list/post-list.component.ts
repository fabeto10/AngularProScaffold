import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { createPost, loadPosts } from '../../store/post.actions';
import { PostState, selectAll } from '../../store/post.reducer';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from '../post-item/post-item.component';
import { MatListModule } from '@angular/material/list';
import { PostModule } from '../../post.module';
import { Post } from '../../model/post.model';
import { PostMaterialModule } from '../../post-material.module';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    PostItemComponent,
    MatListModule,
    PostModule,
    PostMaterialModule,
  ],
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private store: Store<{ post: PostState }>) {
    this.posts$ = store.select((state) => selectAll(state.post));
  }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }

  onCreate(): void {
    const post: Post = {
      id: 101,
      title: 'test post',
      body: 'test post body',
      userId: 1,
    };
    this.store.dispatch(createPost({ post }));
  }

  hasUnsavedChanges(): boolean {
    return false;
  }
}
