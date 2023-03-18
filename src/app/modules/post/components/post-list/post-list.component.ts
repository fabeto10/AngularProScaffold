import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadPosts } from '../../store/post.actions';
import { PostState } from '../../store/post.reducer';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from '../post-item/post-item.component';
import { MatListModule } from '@angular/material/list';
import { PostModule } from '../../post.module';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PostItemComponent, MatListModule, PostModule],
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
