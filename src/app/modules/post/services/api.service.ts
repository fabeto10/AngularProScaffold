import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../model/post.model';
import { Observable } from 'rxjs';
import { PostModule } from '../post.module';

@Injectable({ providedIn: PostModule })
export class PostApiService {
  private readonly baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }
}
