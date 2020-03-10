import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-spanish-category',
  templateUrl: './spanish-category.component.html',
  styleUrls: ['../../main-page/main-page.component.css']
})
export class SpanishCategoryComponent implements OnInit {

  bookService: BooksService

  constructor(private booksService: BooksService) { 
    this.bookService = booksService;
    console.log("Refresh -> BooksDB: ", this.bookService.booksDataBase);
    this.bookService.categoriesView('spanishPage')
  }
  
  ngOnInit() {
    setTimeout(() => {
      if(this.bookService.booksDataBase){
        this.bookService.createSpanishCategory();
      }
    }, 200)
  }

}
