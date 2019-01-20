import { Component, OnInit, Input } from '@angular/core';
import { ArrayType } from '@angular/compiler';
import { Post } from '../models/post.model';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() posts: Post;
  // @Input() posts;

  constructor() {}

  ngOnInit() {}
}
