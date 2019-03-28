import { Post } from './../types/data/post';
import { AppError } from '../types/errors/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../types/errors/not-found-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService) {
  }
  ngOnInit() {
    this.service.getPosts().subscribe(
      (data: Post[]) => {
        console.log(data);
        this.posts = data;
      },
      (error: Response) => {
        console.log(error);
        alert('An unexpected error occurred.')
      }
    );
  }
  
  createPost(titleInput: HTMLInputElement) {
    let post = { title: titleInput.value}
    titleInput.value = "";
    this.service.createPost(post).subscribe(
      (data: Post) => {
        console.log(data);
        post['id'] = data.id;
        this.posts.splice(0, 0, post);
      },
      (error: Response) => {
        console.log(error);
        alert('An unexpected error occurred.')
      }
    );
  }
  
  updatePost(post) {
    this.service.updatePost(post.id, {isRead: true}).subscribe( 
      response => {
        console.log(response);
      },
      (error: Response) => {
        console.log(error);
        alert('An unexpected error occurred.')
      }
    );
  }
  deletePost(post) {
    this.service.deletePost(post.id).subscribe(
      response => {
        console.log(response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted.')
        } else {
          alert('An unexpected error occurred.')
        }
        console.log(error);
      }
    );
  }
}
