import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostMaterialModule } from '../../post-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { Post } from '../../model/post.model';
import { deletePost, updatePost } from '../../store/post.actions';
import { Store } from '@ngrx/store';
import { PostState } from '../../store/post.reducer';
import { Log } from '../../../../shared/decorators/log.decorator';

@Component({
  selector: 'app-post-item',
  standalone: true,
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PostMaterialModule, SharedModule],
})
export class PostItemComponent implements OnChanges {
  @Input() post!: Post;
  constructor(private store: Store<{ post: PostState }>) {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('post item changes: ', changes);
  }

  onUpdate(post: Post): void {
    // Update the post object as needed before dispatching the action
    this.store.dispatch(updatePost({ post }));
  }

  @Log
  onDelete(id: number): void {
    this.store.dispatch(deletePost({ id }));
  }
}
