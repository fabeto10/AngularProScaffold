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
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('post item changes: ', changes);
  }
}
