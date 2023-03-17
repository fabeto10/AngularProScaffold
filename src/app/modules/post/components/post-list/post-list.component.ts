import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadPosts } from '../../store/post.actions';
import { PostState } from '../../store/post.reducer';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent implements OnInit {
  posts$: Observable<any[]>;

  constructor(private store: Store<{ post: PostState }>) {
    this.posts$ = store.select((state) => state.post.posts);
  }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }
}
