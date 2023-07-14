import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  blogData: Array<any> = [];

  constructor(private blogService:BlogService) {}

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((res) => {
      console.log(res);
      this.blogData = res;
    })
  }
}
