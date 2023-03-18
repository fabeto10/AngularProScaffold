import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
export class PostItemComponent {
  @Input() post!: Post;
}
