import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  messages: any;

  ngOnInit(): void {
    this.messages = this.dataService.getPosts();
    /*.subscribe(
      (posts: any[]) => {
        console.log(posts);
        this.messages = posts;
      }
    );*/
  }

}
