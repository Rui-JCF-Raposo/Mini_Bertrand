import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-english-category',
  templateUrl: './english-category.component.html',
  styleUrls: ['../../main-page/main-page.component.css']
})
export class EnglishCategoryComponent implements OnInit {

  bookService: BooksService;

  constructor(private booksService: BooksService) { 
    this.bookService = booksService;
    this.bookService.categoriesView('englishPage');
  }

  ngOnInit() {
    setTimeout(() => {
      if(this.bookService.booksDataBase) {
        this.bookService.createEnglishCategory();
      }
    }, 200);
  }

}
