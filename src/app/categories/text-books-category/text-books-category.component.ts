import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-text-books-category',
  templateUrl: './text-books-category.component.html',
  styleUrls: ['../../main-page/main-page.component.css']
})
export class TextBooksCategoryComponent implements OnInit {

  bookService: BooksService;

  constructor(private booksService: BooksService) { 
    this.bookService = booksService;
    this.bookService.categoriesView('textBooksPage');
  }
  
  ngOnInit() {
    setTimeout(() => {
      if(this.bookService.booksDataBase) {
        this.bookService.createTextBooksCategory();
      }
    }, 200);
  }

}
