import { AppError } from '../types/errors/app-error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotFoundError } from '../types/errors/not-found-error';
import { Post } from '../types/data/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "https://jsonplaceholder.typicode.com/posts";
  
  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get<Post[]>(this.url);
  }
  createPost(post) {
    return this.http.post<Post>(this.url, JSON.stringify(post));
  }
  updatePost(postId, postParts) {
    return this.http.patch(this.url + '/' + postId, JSON.stringify(postParts));
  }
  deletePost(postId) {
    return this.http.delete(this.url + '/' + postId).pipe(
      catchError(this.deleteError)
    );
  }
  deleteError(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(error));
  }
}
