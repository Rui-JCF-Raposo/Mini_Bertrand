import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  bookService: BooksService;

  constructor(private booksService: BooksService, private router: Router) { 
    this.bookService = booksService;
    this.bookService.categoriesView('homePage');
  }

  ngOnInit() {
    this.router.events.subscribe((e) => {
      window.scrollTo(0,0)
    });
    setTimeout(() => {
      this.bookService.createNewBooksCategory();
      this.bookService.createPreReleasedBooksCategory();
    }, 600)
    // if(this.bookService.booksDataBase) {
    //   this.bookService.createNewBooksCategory();
    //   this.bookService.createPreReleasedBooksCategory();
    // }
  }

  title = 'final-project-front-end';
  
}
