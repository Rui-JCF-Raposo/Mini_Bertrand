import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'final-project-front-end'
  booksService: BooksService;

  constructor(booksService: BooksService) {
    this.booksService = booksService;
  }
  
  ngOnInit() {
    
  } 
}
