import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-ebooks-category',
  templateUrl: './ebooks-category.component.html',
  styleUrls: ['../../main-page/main-page.component.css']
})
export class EbooksCategoryComponent implements OnInit {

  bookService: BooksService

  constructor(private booksService: BooksService) { 
    this.bookService = booksService;
    this.bookService.categoriesView('ebooksPage');
  }

  ngOnInit() {
    setTimeout(() => {
      if(this.bookService.booksDataBase) {
        this.bookService.createEbooksCategory();
      }
    }, 100);
  }

}
