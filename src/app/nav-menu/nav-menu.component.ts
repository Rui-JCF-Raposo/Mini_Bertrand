import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  bookService: BooksService;
  numberOfItemsInShopcart: number;

  constructor(private booksService: BooksService) { 
    this.bookService = booksService;
  }

  ngOnInit() {
    setInterval(() => {
      this.numberOfItemsInShopcart = this.bookService.calculateTotalBooksInShopcart();
    }, 300);
  }

  changeView(view) {
    this.bookService.categoriesView(view)
  }
}
