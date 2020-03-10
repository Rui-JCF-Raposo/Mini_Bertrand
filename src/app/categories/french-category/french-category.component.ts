import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-french-category',
  templateUrl: './french-category.component.html',
  styleUrls: ['../../main-page/main-page.component.css']
})
export class FrenchCategoryComponent implements OnInit {

  bookService: BooksService

  constructor(private booksService: BooksService) { 
    this.bookService = booksService;
    this.bookService.categoriesView('frenchPage');
  }

  ngOnInit() {
    setTimeout(() => {
      if(this.bookService.booksDataBase) {
        this.bookService.createFrenchCategory();
      }
    }, 200);
  }

}
