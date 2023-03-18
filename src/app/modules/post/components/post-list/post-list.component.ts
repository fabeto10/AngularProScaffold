import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { createPost, loadPosts } from '../../store/post.actions';
import { PostState, selectAll } from '../../store/post.reducer';
import { PostItemComponent } from '../post-item/post-item.component';
import { PostModule } from '../../post.module';
import { Post } from '../../model/post.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PostItemComponent, PostModule],
})
export class PostListComponent implements OnInit {
  postForm: FormGroup;
  posts$: Observable<Post[]>;

  constructor(
    private store: Store<{ post: PostState }>,
    private fb: FormBuilder
  ) {
    this.posts$ = store.select((state) => selectAll(state.post));
    this.postForm = this.fb.group({
      id: [null, Validators.required],
      titleBody: [{ title: '', body: '' }, Validators.required],
      userId: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }

  onCreate(): void {
    if (this.postForm.invalid) {
      return;
    }

    const { id, userId, titleBody } = this.postForm.value;
    const post: Post = {
      id,
      title: titleBody.title,
      body: titleBody.body,
      userId,
    };
    this.store.dispatch(createPost({ post }));
  }

  hasUnsavedChanges(): boolean {
    return false;
  }

  trackByPostId(index: number, post: Post): number {
    return post.id;
  }
}
